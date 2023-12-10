import { defineStore } from "pinia";
import {  ref } from "vue";
 
const usePostStore = defineStore('post', () => {
    const posters = ref([]);
    const FETCH_POST = async () => {
    var json_data = require('../json/post.json');
    console.log(json_data);
    posters.value = json_data;
 
    };
  
    return {
        FETCH_POST,
        posters
    };
});
 
export default usePostStore;