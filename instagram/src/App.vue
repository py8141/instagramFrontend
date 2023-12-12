<template>
  <!-- <SignUp v-if="!isLoggedIn"></SignUp>
  <div v-if="isLoggedIn">
          <HeaderInstagram></HeaderInstagram>
    
  </div> -->
  <HeaderInstagram />
  
  <router-view >  </router-view>

</template>
<script>
//  import RegistryPage from './components/RegistryPage.vue';
import { useCookies } from "vue3-cookies";
import { computed } from 'vue';
import HeaderInstagram from './components/HeaderInstagram.vue'
//import AdsInstgram from './components/AdsInstagram.vue'
// import SignUp from "./components/SignUp.vue";
// import RegistryPage from "./components/RegistryPage.vue";
//import SignUp from './components/SignUp.vue';

export default {
  name: 'App',
  components: {
    HeaderInstagram,
    // AdsInstgram,
    // SignUp,
  //  RegistryPage
  },
  setup() {
    const { cookies } = useCookies()
    console.log(cookies.get('serverToken'));
    // const isRegister = cookies.get('serverToken')
    const isLoggedIn = computed(() => {
      const token = cookies.get('serverToken');
      return token !== null && token.length !== 0;
    });

    return {
      isLoggedIn
    }

  }
  // const isLoggedin =computed(()=>{

  // } )


}
</script>
 
<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
 