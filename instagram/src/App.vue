<template>
  <HeaderInstagram></HeaderInstagram>
      <!-- <RegistryPage></RegistryPage> -->
 <AdsInstgram></AdsInstgram>
 </template>
 
 
 
 <script>
//  import RegistryPage from './components/RegistryPage.vue';
 import HeaderInstagram from './components/HeaderInstagram.vue'
 import AdsInstgram from './components/AdsInstagram.vue'
 export default {
   name: 'App',
   components: {
     HeaderInstagram,
      AdsInstgram,
   }
 }
 </script>
 
 <style>
 body {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }
 </style>
 