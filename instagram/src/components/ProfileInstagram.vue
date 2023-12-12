<template>
    <div class="profile">
      <div class="top-row">
        <div class="left-column">
          <div class="user-info">
            <img :src="user?.profilePic" alt="Profile Picture" class="avatar" />
            <div class="user-details">
              <h2>{{ userData?.userName }}</h2>
              <p>{{  userData?.bio}}</p>
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="top-right">
            <center><h2>{{ userData?.name }}</h2></center>
          </div>
          <div class="bottom-right">
            <div class="user-stats">
              <p><strong>{{ posters.length }}</strong> Posts</p>
              <p><strong>{{ userData?.followers?.length }}</strong> Followers</p>
              <p><strong>{{ userData?.following?.length }}</strong> Following</p>
            </div>
            <!-- <button v-if="isFollowing(user.userId)" @click="toggleFollow(result.userId)" class="follow-button">Following</button>
            <button v-else @click="toggleFollow(user.userId)" class="follow-button">Follow</button> -->

            <button class="follow-button">Follow</button>
          </div>
        </div>
      </div>
      <div class="divider">
        <p class="post-label"><img src="https://www.svgrepo.com/show/509128/grid.svg" width="15px" height="15px"> POSTS</p>
      </div>
   
      <div class="bottom-row">
        <div
          v-for="post in userPost.data"
          :key="post.postId"
          :style="{ backgroundColor: post.color }"
          class="post"
          @mouseenter="startHoverTimer(post)"
          @mouseleave="clearHoverTimer"
        >

                    <div v-if="post.datatype.includes('image')">
                        <img :src="post.data" alt="image" class="post-image" @click="showFullImage(post)">
                        <p class="post-caption">{{ post.caption }}</p>
                    </div>
                    <div v-else-if="post.datatype.includes('video')">
                        <video alt="video" class="post-video" muted autoplay @click="showFullImage(post)" width="300" height="250">
                            <source :src="post.data" type="video/mp4">
                            <p class="post-caption">{{ post.caption }}</p>
                        </video>

                    </div>


          <!-- <img :src="post.data" alt="Post Image" class="post-image" @click="showFullImage(post)" />
          <p class="post-caption">{{ post.caption }}</p> -->
        </div>
      </div>
    </div>
  </template>
   
  <script>

  import { ref, onMounted, onBeforeUnmount,onBeforeMount, computed,watch } from 'vue';
  import useProfileStore from '../store/ProfilePage';
  import usePostStore from '../store/PostStore';
  import js from '@/components/PostInstagram.vue' 
  export default {
    setup() {
      const prfileStore = useProfileStore();
      const postStore = usePostStore();
      let hoverTimer = null;
      const hoverDelay = 200;
      const showFullImagePopup = ref(false);
      const fullImageSrc = ref('');
      const fullImageComment = ref('');

      const isFollowing = (userId) => {
        return rootStore.followers.includes(userId);
      };

      const toggleFollow = (userId) => {
        console.log(`Toggle follow for user with ID ${userId}`);
      };
      const userId = js.userId
      console.log('Hiis',userId)
      
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

      const userProfile = computed(() => prfileStore.userDetails) 
      const userData = computed(() => userProfile.value.data)
      const userPost = computed(()=> prfileStore.userPosts)

     watch(userProfile,()=>{
      console.log("hiii",userProfile.value.data);
     })
     watch(userPost,()=>{
      console.log("Nooos",userPost.value.data);
     })

      onBeforeMount (()=>{
      prfileStore.FETCH_USERDETAILS("65754f9169e875213b5e3454")
      prfileStore.FETCH_USERPOSTS("65754f9169e875213b5e3454")
       })

      const user = computed(() => prfileStore.profile);
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

        isFollowing,
        toggleFollow
        userProfile,
        userData,
        userPost
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
      margin-top: 0;
    }
   
    .avatar {
      width: 70%;
      height: auto;
    }
   
    .bottom-row {
      grid-template-columns: repeat(1, 1fr);
    }
  }
   
  @media (max-width: 480px) {
    .profile {
      max-width: 100%;
      padding : 10%;
    }
    .user-info{
        padding-top: 60px;
    }
   
    .bottom-row {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  </style>