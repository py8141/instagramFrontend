import { defineStore } from "pinia";
import {  ref } from "vue";
 
 const useRootStore = defineStore('root', () => {
    const posts =  ref([])
    const FETCH_POST = async ()=>{
    const res1 = await require("../json/posts.json");
    posts.value=res1
    console.log(posts.value);
    }
    return {
        posts,
        FETCH_POST
    
   } })

    export default useRootStore;

