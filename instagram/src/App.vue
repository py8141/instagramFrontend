<template>
  <HeaderInstagram></HeaderInstagram>
 <AdsInstgram></AdsInstgram>
 </template>
 <script>
 import RegistryPage from './components/RegistryPage.vue';
 import HeaderInstagram from './components/HeaderInstagram.vue'
 import AdsInstgram from './components/AdsInstagram.vue'
 //import SignUp from './components/SignUp.vue';

 export default {
   name: 'App',
   components: {
    HeaderInstagram,
    AdsInstgram,
   // SignUp,
},
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
 