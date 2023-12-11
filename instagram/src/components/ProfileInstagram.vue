<template>
    <div class="profile">
      <div class="top-row">
        <div class="left-column">
          <div class="user-info">
            <img :src="user?.profilePic" alt="Profile Picture" class="avatar" />
            <div class="user-details">
              <h2>{{ user.name }}</h2>
              <p>{{ user.bio }}</p>
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="top-right">
            <center><h2>{{ user.username }}</h2></center>
          </div>
          <div class="bottom-right">
            <div class="user-stats">
              <p><strong>{{ posters.length }}</strong> Posts</p>
              <p><strong>{{ user.followers.length }}</strong> Followers</p>
              <p><strong>{{ user.following.length }}</strong> Following</p>
            </div>
            <button class="follow-button">Follow</button>
          </div>
        </div>
      </div>
      <div class="divider">
        <p class="post-label"><img src="https://www.svgrepo.com/show/509128/grid.svg" width="15px" height="15px"> POSTS</p>
      </div>
   
      <div class="bottom-row">
        <div
          v-for="post in posters"
          :key="post.postId"
          :style="{ backgroundColor: post.color }"
          class="post"
          @mouseenter="startHoverTimer(post)"
          @mouseleave="clearHoverTimer"
        >
          <img :src="post.data" alt="Post Image" class="post-image" @click="showFullImage(post)" />
          <p class="post-caption">{{ post.caption }}</p>
        </div>
      </div>
   
      <!-- <div v-if="showFullImagePopup" class="full-image-popup" @click="hideFullImage">
        <div class="popup-content">
          <img :src="fullImageSrc" alt="Full Image" class="popup-image" @click.stop />
          <p class="popup-comment">{{ fullImageComment }}</p>
        </div> -->
      <!-- </div> -->
    </div>
  </template>
   
  <script>
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
  import useProfileStore from '../store/ProfilePage';
  import usePostStore from '../store/PostStore';
   
  export default {
    setup() {
      const rootStore = useProfileStore();
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
      };
    },
  };
  </script>
   
   
  <style scoped>
  .profile {
    max-width: 75%;
    margin: auto;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    padding: 80px;
  }
   
  .top-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 35px;
  }
   
  .left-column {
    flex: 48%;
  }
   
  .right-column {
    flex: 48%;
    margin-top: 50px;
  }
   
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
  }
   
  .avatar {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    background-color: black;
    margin-bottom: 10px;
  }
   
  .user-details {
    width: 70%;
  }
   
  .top-right {
    width: 100%;
  }
   
  .bottom-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
   
  .user-stats {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
   
  .user-stats p {
    margin-right: 20px;
  }
   
  .follow-button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
   
  .follow-button:hover {
    background-color: #2980b9;
  }
   
  .divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
   
  .divider p {
    display: inline-block;
    padding: 5px 10px;
    /* background-color: #ccc; */
    border-radius: 5px;
    font-weight: bold;
  }
   
  .divider p.post-label::after {
    bottom: 0;
  }
   
  .bottom-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-around;
    gap: 20px;
    margin-top: 20px;
  }
   
  .post {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: transform 0.2s;
  }
   
  .post:hover {
    transform: scale(1.1);
  }
   
  .post img {
    width: 100%;
    height: 225px;
    object-fit: cover;
  }
   
  .post-caption {
    padding: 10px;
    text-align: center;
  }
   
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .profile {
      max-width: 90%;
    }
   
    .top-row {
      margin-bottom: 20px;
    }
   
    .left-column,
    .right-column {
      flex: 100%;
    }
   
    .avatar {
      width: 70%;
      height: auto;
    }
   
    .bottom-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
   
  @media (max-width: 480px) {
    .profile {
      max-width: 100%;
    }
   
    .bottom-row {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  </style>