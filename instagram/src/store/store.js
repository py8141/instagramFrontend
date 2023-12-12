import { defineStore } from "pinia";
import {  ref } from "vue";
import { useCookies } from "vue3-cookies"; 
 const useRootStore = defineStore('root', () => {
    const posts =  ref([])
    const FETCH_POST = async ()=>{
      const {cookies} = useCookies()
       const token = cookies.get('token')
       console.log(token) 
    const res1 = await require("../json/posts.json");
    posts.value=res1
    console.log(posts.value);
    }
    return {
        posts,
        FETCH_POST
    
   } })

    export default useRootStore;

