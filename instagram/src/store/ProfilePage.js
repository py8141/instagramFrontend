import { defineStore } from "pinia";
import {  ref } from "vue";
 
const useProfileStore = defineStore('profile', () => {
    const profile = ref({});
    const FETCH_PROFILE = async () => {
    var json_data = require('../json/profile.json');
    console.log(json_data);
 
    profile.value = json_data;
 
    };
  
    return {
        FETCH_PROFILE,
        profile
    };
});
 
export default useProfileStore;