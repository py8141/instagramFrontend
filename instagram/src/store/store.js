import { defineStore } from "pinia";
import {  ref } from "vue";
 
 const useRootStore = defineStore('root', () => {
    const posts =  ref(null)
    const FETCH_POST = async ()=>{
    // const res1 = await require("../json/posts.json");
    // posts.value=res1

    const res = await fetch('http://10.20.3.72:8091/api/feed/byUserId/6575512869e875213b5e3455')
    const json = await res.json();
    posts.value = json
    console.log(posts.value);
    }

    const LIKE_POST = async (likeDto, postId) => {
        try {
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(likeDto), 
            };
    
            const res = await fetch(`http://10.20.3.72:8091/api/posts/like/${postId}`, options);
    
            if (!res.ok) {
                throw new Error(`Failed to like the post. Status: ${res.status}`);
            }
    
            const json = await res.json();
            console.log(json); 
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    return {
        posts,
        FETCH_POST,
        LIKE_POST
    
   } })

    export default useRootStore;

