// import { ref } from 'vue';

// export default {
//   setup() {
//     const userData = ref({
//       username: '',
//       name: '',
//       bio: '',
//       accountType: '',
//       accountVisibility: '',
//       profilePhoto: '', 
//     });

//     const handleFileChange = (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//           userData.profilePhoto = reader.result;
//         };
//         reader.readAsDataURL(file);
//       }
//     };

//     const registerUser = () => {
//       fetch('', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       })
//         .then(response => response.json())
//         .then(data => {
          
//           console.log(data);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     };

//     return { userData, handleFileChange, registerUser };
//   },
// };