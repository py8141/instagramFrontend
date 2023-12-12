import { defineStore } from "pinia";
import {  ref } from "vue";
import { useCookies } from "vue3-cookies"; 
 const useRootStore = defineStore('root', () => {
    const posts =  ref(null)
    const FETCH_POST = async ()=>{
    const {cookies} = useCookies()
    const token = cookies.get('token')
    console.log(token) 
    const res = await fetch('http://10.20.3.72:8091/insta/feed/byUserId/6575512869e875213b5e3455')
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
    
            const res = await fetch(`http://10.20.3.72:8091/insta/posts/like/${postId}`, options);
    
            if (!res.ok) {
                throw new Error(`Failed to like the post. Status: ${res.status}`);
            }
    
            const json = await res.json();
            console.log(json); 
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
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
        UPDATE_COMMENT,
        LIKE_POST
    
   } 
});

    export default useRootStore;

