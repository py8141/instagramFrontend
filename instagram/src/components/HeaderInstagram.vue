<template>
<div class="main-content">
        <div class="sidebar">
                <router-link to="/postInstagram">HOME</router-link>
                <router-link to="/search">SEARCH</router-link>
                <router-link to="/profile">PROFILE</router-link>
                <router-link to="/upload">UPLOAD</router-link>
                <router-link to="/request">REQUESTS</router-link>
                <router-link to="/activity">ACTIVITY</router-link> <br>
                 <img :src="user?.profilePic" alt="Profile Picture" class="avatar" />
                 <h3 class="profile-user-name" @click="profileRedirect">{{ user.username }}</h3>
                  <a class="logout" style="color: #0095F6;" >Logout</a>       
          </div>    


        <div class="content">
                <div class= "logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622" width="30px" height="30px">INSTAGRAM</div>
                <!-- <router-view></router-view> -->
        </div>
</div>
</template>

<script>

import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import useRootStore from '../store/ProfilePage';
  import usePostStore from '../store/PostStore';
import router from '@/router';
   
  export default {
    setup() {
      const rootStore = useRootStore();
      const postStore = usePostStore();
      rootStore.FETCH_PROFILE();
      postStore.FETCH_POST();
      let hoverTimer = null;
      const hoverDelay = 200;
      const showFullImagePopup = ref(false);
      const fullImageSrc = ref('');
      const fullImageComment = ref('');
   
      function startHoverTimer(post) {
        hoverTimer = setTimeout(() => {
          showFullImagePopup.value = true;
          fullImageSrc.value = post.image;
          fullImageComment.value = post.caption;
        }, hoverDelay);
      }
   
      function clearHoverTimer() {
        clearTimeout(hoverTimer);
      }
   
      function showFullImage(post) {
        showFullImagePopup.value = true;
        fullImageSrc.value = post.image;
        fullImageComment.value = post.caption;
      }
   
      function hideFullImage() {
        showFullImagePopup.value = false;
        fullImageSrc.value = '';
        fullImageComment.value = '';
      }
      const profileRedirect = () => {
        router.push('/profile')
      }
   
      onMounted(() => {
        window.addEventListener('resize', handleResize);
      });
   
      onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize);
      });
   
      function handleResize() {
        // Add logic to handle resizing if needed
      }
   
      const user = computed(() => rootStore.profile);
      const posters = computed(() => postStore.posters);
   
      return {
        startHoverTimer,
        clearHoverTimer,
        showFullImage,
        hideFullImage,
        showFullImagePopup,
        fullImageSrc,
        fullImageComment,
        user,
        posters,
        profileRedirect
      };
    },
  };





</script>

<style scoped>

.avatar{
    float: left;
    margin-right: 5px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    background-color: black;
    margin-bottom: 10px;
}
.logout{
  margin-top: -15px;
  font-size: medium;
  
}
.profile-user-name{
  display: inline;
  cursor: pointer;
}

.main-content{
max-width: 80%;
margin: auto;
}

.content .logo
{
padding: 0;
margin: 0;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 25px;
display: flex;
justify-content: center;
height: 60px;
position: fixed;
align-items: center;
background-color: white;
width: 65%;
z-index: 5;


}


body {
  margin: 0;
  font-family: "Lato", sans-serif;
  overflow: hidden;
}

.sidebar {
  margin: 0;
  padding-top: 70px;
  width: 200px;
  background-color: white;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right: 1px solid black;
  font-size: 20px;
  align-content: center;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
 
.sidebar a.active {
  color: black;
  font-weight: bold;
}

.sidebar a:hover:not(.active) {
font-weight: bold;
}

div.content {
  margin-left: 200px;
  padding: 0px 16px;
  height: 10px;
}
.content::webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 770px) {
  .sidebar {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    z-index: 5;
    background-color: lightgray;
    height: auto;
    padding: 0px;
    font-size: 13px;
  }
  .sidebar a {
    float: left;
}
  div.content 
  {margin-left:0;
}
.content .logo{
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    width: 73%
}
.avatar{
    float: left;
    margin-right: 5px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
    background-color: black;
    margin-bottom: 10px;
}

  /*@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }*/
}
</style>