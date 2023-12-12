import { defineComponent,ref} from "vue";
import {logInWithEmailAndPassword, signInWithGoogle} from "@/firestore/firebaselogin"
export default defineComponent({
    setup() { 

        const email = ref('')
        const password = ref('')
        
        const handleLogin = () => {
            console.log("i am in login ", email.value, password.value);
            logInWithEmailAndPassword(email.value, password.value)
        }

        const handleLoginGoogle = () => { 
            signInWithGoogle()
        }

        return {
            email,
            password,
            handleLogin,
            handleLoginGoogle
        };
    },
});

// export default defineComponent({
//     setup() {
//       const email = ref('');
//       const password = ref('');
  
//       const handleLogin = async () => {
//         try {
//           // Check if email and password are not empty
//           if (!email.value || !password.value) {
//             alert('Please enter both email and password');
//             return;
//           }
  
//           console.log('I am in login', email.value, password.value);
  
//           // Call your logInWithEmailAndPassword function
//           await logInWithEmailAndPassword(email.value, password.value);
  
//           // If login is successful, navigate to the feed route
//           this.$router.push('/feed');
//         } catch (error) {
//           // Handle unsuccessful login
//           console.error('Login failed', error);
  
//           // Check if the error is due to an invalid email
//           if (error.code === 'auth/invalid-email') {
//             alert('Invalid email address');
//             // You may choose to return or handle this case differently
//             return;
//           }
  
//           // For other errors, you can decide how to handle them
//         }
//       };
//       const handleLoginGoogle = () => {
//         // Assuming signInWithGoogle is synchronous
//         signInWithGoogle();
//       };
  
//       return {
//         email,
//         password,
//         handleLogin,
//         handleLoginGoogle
//       };
//     },
//   });


