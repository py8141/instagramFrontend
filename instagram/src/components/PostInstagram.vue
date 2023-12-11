<template>
<div  v-for="post in posts"  :key="post"  >
<body>
        
        <div class="card">
            <!-- {{ posts }} -->
                <div class="top">
                    <div class="userDeatils">
                        <div class="profileImg">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622" alt="user" class="cover">
                        </div>
                        <h3 @click="goToUser(post.userId)">{{ post.username }}<br></h3>
                    </div>
                    <div class="dot">
                        <img src="../assets/dot.png" alt="dot">
                    </div>
                </div>
                <div class="imgBg">

                    <div v-if="post.datatype === 'image/jpeg'">
                        <img :src="post.data" class= "cover">
                    </div>
                    <div v-else-if="post.datatype === 'video'"> 
                     <iframe src="https://www.youtube.com/embed/HorXomQrOi8" class="cover"> 
                         <!-- <video  alt="video" class= "cover"  controls>
                         <source :src="post.data" type="video/mp4"> 
                         </video>  -->
                     </iframe>
                    </div>
                </div>
                <div class="btns">
                    <div class="left">
                        <img src="../assets/heart.png" alt="heart" class="heart" @click="likeButton(post.postId)">
                        <img src="../assets/comment.png" alt="comment">
                        <img src="../assets/share.png" alt="share">
                    </div>
                    <div class="right">
                        <img src="../assets/bookmark.png" alt="bookmark">
                    </div>
                </div>
                <h4 class="likes">{{ post.likesOnPost.length }} likes</h4>
                <h4 class="message">
                    <b>{{ post.username }}</b>
                    {{ post.caption }}
                    <span>#{{ post.category }}</span>
                </h4>
                <h4 class="comments">View all {{ post.comments.length }} comments</h4>
                <div class="addComments">
                    <div class="userImg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622" alt="user" class="cover">
                    </div>
                    <input type="text" class="text" placeholder="Add a comment...">
                </div>
                <h5 class="postTime">{{ post.timestamp }}</h5>
            </div>
           
</body>
</div>

</template>
<script>
import { computed, defineComponent, ref } from 'vue';
import useRootStore from '@/store/store.js'
import router from '@/router';

export default defineComponent({
setup(){   

    const rootStore = useRootStore()
    // console.log(rootStore);
    rootStore.FETCH_POST();
    const posts = computed(() => rootStore.posts)
    const noOfpost = ref(0);

    const goToUser = ((userId)=>{
        console.log(userId);
        router.push(`/profile/${userId}`)
    })
    const likeButton = ((postId)=>{
        console.log(postId);
        let likeObject ={
            "userId" : "6575512869e875213b5e3455",
            "posId" : postId,
            "timestamp" : new Date().toISOString()
        }
        console.log(likeObject);
        rootStore.LIKE_POST(likeObject,postId);
        location.reload();

    })

return{
   posts,
   noOfpost,
   likeButton,
   goToUser
   

}}}
)

</script>
<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: white;
}
.card{
    position: relative;
    width: 600px;
    min-height: 400px;
    background: #fff;
    box-shadow: 15px 15px 60px rgba(0, 0, 0, .15);
    padding: 20px;
}
.card .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card .top .userDeatils{
    display: flex;
    align-items: center;
}
.card .top .userDeatils .profileImg{
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
    overflow: hidden;
}
.cover{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
}
.card .top .userDeatils h3{
    font-size: 18px;
    color: #4d4d4f;
    font-weight: 700;
    line-height: 1rem;
    cursor: pointer;
}
.card .top .userDeatils span{
    font-size: 0.75em;
}
.card .top .dot{
    transform: scale(0.6);
    cursor: pointer;
}
.imgBg{
    position: relative;
    width: 100%;
    height: 320px;
    margin: 10px 0 15px;
}
.btns{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btns img{
    max-width: 24px;
    cursor: pointer;
}
.btns .left img{
    margin-right: 8px;
}
.likes{
    margin-top: 5px;
    font-size: 1em;
    color: #4d4d4f;
}
.message{
    font-weight: 400;
    margin-top: 5px;
    color: #777;
    line-height: 1.5em;
}
.message b{
    color: #262626;
}
.message span{
    color: #1d92ff;
    cursor: pointer;
}
.comments{
    margin-top: 10px;
    align-items: center;
    color: #999;
}
.addComments{
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.addComments .userImg{
    position: relative;
    min-width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
}
.addComments .text{
    width: 100%;
    border: none;
    outline: none;
    font-weight: 400;
    font-size: 18px;
    color: #262626;
}
.addComments .text::placeholder{
    color: #777;
}
.postTime{
    margin-top: 10px;
    font-weight: 500;
    color: #777;
}

@media screen and (max-width: 700px) {
  body {
    min-height: 10vh;
   
  }
}






</style>
