import { defineComponent, ref } from "vue";
import { registerWithEmailAndPassword, signInWithGoogle } from "@/firestore/firebaselogin"
import { useCookies } from "vue3-cookies";
import router from "@/router";
export default defineComponent({
  setup() {
    const { cookies } = useCookies();
    const email = ref('')
    const password = ref('')
    const name = ref('')

    const handleSignup = () => {
      console.log("i am in signup ", email.value, password.value, name.value);
      const response = registerWithEmailAndPassword(name.value, email.value, password.value);
      response.then((res) => {
        const cred = res.firestore._authCredentials
        const auth = cred.auth.auth
        const c_user = auth.currentUser
        cookies.set("token", c_user.accessToken)
        cookies.set("userId", c_user.uid)
        getCustomToken(cookies.get("token"))
        return res
      }).catch((err) => {
        console.log('Hello', err)
      })
    }
    const handleGoogleSign = () =>{
     const response =  signInWithGoogle()
     response.then((res) => {
           console.log('InSignup',res)
           const auth = res._tokenResponse
           const idToken = auth.idToken
           console.log('Insignuop',idToken)
           cookies.set("token", idToken)
        getCustomToken(cookies.get("token"))
     })
    }
  const getCustomToken = async (FBidToken) => {
    const GATEWAY_URL = "http://10.20.3.164:8765/user-details"
    const response = await fetch(GATEWAY_URL, {
      method: "GET",
      headers: {
        "authorization":`Bearer ${FBidToken}`,
        "Content-Type": "application/json",
      },
    });

     console.log(response.headers.get('Authorization'))
     cookies.set("serverToken",decodeURI(response.headers.get('Authorization')))
     console.log(cookies.get('serverToken'))
     getUserDetails()
  }

   const getUserDetails = async ()=>{
    const GATEWAY_URL = "http://10.20.3.164:8765/getUser"
    const response = await fetch(GATEWAY_URL,{
      method:"GET",
        headers:{
          authorization:cookies.get('serverToken'),
        "Content-Type": "application/json",
        },
  })
     
     const res = await response.json()
     cookies.set("firebaseuid",res.uid)
     cookies.set("userEmail",res.email)
     router.push('/registry')
     console.log(res)
  }
    
    return {
      email,
      password,
      name,
      handleSignup,
      getCustomToken,
      getUserDetails,
      handleGoogleSign
    }
  }
})