import { defineStore } from "pinia";
import {  ref } from "vue";
 
 const useRootStore = defineStore('root', () => {
    const posts =  ref([])
    const FETCH_POST = async ()=>{
        // const res1 = await require("../json/posts.json");
        // posts.value=res1
     
        const res = await fetch('http://10.20.3.72:8091/insta/feed/byUserId/6575512869e875213b5e3455')
        const json = await res.json();
        posts.value = json
        console.log(posts.value);
    }

    const UPDATE_COMMENT = async (commentDto, postId) => {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentDto),
            };
    
            const res = await fetch(`http://10.20.3.72:8091/insta/posts/comment/${postId}`, options);
    
            if (!res.ok) {
                throw new Error(`Failed to like the post. Status: ${res.status}`);
            }
    
            const json =  res;
            console.log(json);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };




    return {
        posts,
        FETCH_POST, 
        UPDATE_COMMENT
    
   } })

    export default useRootStore;

