import { defineStore } from "pinia";
import { ref } from "vue";

const userStore = defineStore('feed', () => {
   const token = ref("");
   const userId = ref("");
    return {
        token,
        userId
       
    }
    
})
export default userStore;