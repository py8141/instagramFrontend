import { defineComponent, ref } from "vue";
import { registerWithEmailAndPassword } from "@/firestore/firebaselogin"
import { useCookies } from "vue3-cookies";
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
        console.log("calling.....")
        getCustomToken(cookies.get("token"))
        return res
      }).catch((err) => {
        console.log('Hello', err)
      })
    }
   const getCustomToken = async (FBidToken) => {
      const GATEWAY_URL = "http://10.20.3.164:9090/private"
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
    }

    return {
      email,
      password,
      name,
      handleSignup,
      getCustomToken
    }
  }
})