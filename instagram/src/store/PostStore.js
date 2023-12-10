import { defineStore } from "pinia";
import {  ref } from "vue";
 
const usePostStore = defineStore('post', () => {
    const posters = ref([]);
    const FETCH_POST = async () => {
    var json_data = require('../json/post.json');
    console.log(json_data);
    posters.value = json_data;
 
    };
  const postDetails = ref({})
   const USER_POST = async (postDto)=>{
    try{
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postDto),
      };
const urlWithUserId = `http://10.20.3.72:8091/api/posts/addOrSave`;
      const res = await fetch(urlWithUserId,options);
      console.log(res);
      const jsonRes = await res.json();
      console.log(jsonRes)
      postDetails.value = {jsonRes}
      
}
catch(error){
    console.error("Error During resgistration");
}
      
   }
    return {
        FETCH_POST,
        posters,
        USER_POST,
        postDetails
    };
});
 
export default usePostStore;