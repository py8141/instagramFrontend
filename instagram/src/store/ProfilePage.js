import { defineStore } from "pinia";
import {  ref } from "vue";
 
const useRootStore = defineStore('profile', () => {
    const profile = ref({});
    const FETCH_PROFILE = async () => {
    var json_data = require('../json/profile.json');
    console.log(json_data);
    profile.value = json_data;
     };

  const userDetails = ref({})


 const FETCH_USERDETAILS = async(userId) => {
 const targetUrl = `http://localhost:8090/users/getUserDetails?userId=${userId}`;
  const apiKey = "Yes";
  const requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': apiKey,
      'Content-Type': 'application/json' // Add other headers as needed
     }

};
    const response = await fetch(targetUrl, requestOptions);
    if (!response.ok) {
     throw new Error(`HTTP error! Status: ${response.status}`);
    }
     const data = await response.json();
     userDetails.value = {data}
     console.log("ss");
    console.log(data);
}
  const userPosts = ref({})
const FETCH_USERPOSTS = async(userId) => {
    const targetUrl = `http://10.20.3.72:8091/api/posts//user/${userId}`;
     const apiKey = "Yes";
     const requestOptions = {
       method: 'GET',
       headers: {
         'Authorization': apiKey,
         'Content-Type': 'application/json' // Add other headers as needed
        }
   
   };
       const response = await fetch(targetUrl, requestOptions);
       if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
       }
        const data = await response.json();
        userPosts.value = {data}
        console.log("ss");
       console.log(data);
   }
 
    return {
        FETCH_PROFILE,
        FETCH_USERDETAILS,
        profile,
        userDetails,
        userPosts,
        FETCH_USERPOSTS
    };
});
 
export default useRootStore;