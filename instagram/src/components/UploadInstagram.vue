<template>
 <div class="container">
      <div class="wrapper">
        <section class="post">
          <header>Upload Post</header>
          <div class="uploadPost">
            <div class="content">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622" alt="logo">
              <div class="details">
                <p>User_Name</p>
              </div>
            </div>
            <textarea placeholder="What's on your mind ?" spellcheck="false" required></textarea>
            <div class="options">
              <input type="file" accept="image/* | video/*" name="image" id="file" @change="handleFileChange" />
              <label for="file" style="cursor: pointer;">Upload Photo/Video</label><br>
            <img id="output" width="200" v-if="imageUrl" :src="imageUrl" />
            </div>
            <button @click = "uploadImage">Post</button>
          </div>
        </section>
      </div>
    </div>

</template>
<script scoped>

import storage from '@/firebase'
import { ref } from 'vue';
import usePostStore from '../store/PostStore';
export default{
  setup(){
    const selectedFile = ref(null);
    const postStore = usePostStore();
    let type = ref('')
    const caption = ref("");
    const handleFileChange = (event)=>{
      console.log(event)
      const file = event.target.files[0];
      console.log(file)
      selectedFile.value = file;
       }
    const uploadImage = async () =>{
      console.log(selectedFile.value)
      console.log("inside")
    if(selectedFile.value ){
      const storageRef = await storage.StorageRef(storage.storage, selectedFile.value.name)
      storage.uploadBytes(storageRef,selectedFile.value).then((snapshot)=>{
        console.log("Uploaded a file ",snapshot)
       storage.getDownloadURL(storage.StorageRef(storage.storage,selectedFile.value.name))
       .then((url)=>{
      type = selectedFile.value.type
       console.log(selectedFile.value.type)
          console.log(url)
         addPost(url,type)
        })
        .catch(()=>{

         })
      })
    }
     const addPost = (url,type) =>{
      const body = {
      userId: "65754f9169e875213b5e3454",
      username: 'john_doe',
      timestamp: new Date(),
      datatype: type,
     data: url,
    caption: "Hardcode",
      }
      console.log("Called function")
        postStore.USER_POST(body)
     }

   }
  return{
    selectedFile,
    caption,
    handleFileChange,
    uploadImage,
   }    
  }
}
</script>
<style scoped>

.dummy{
  padding: 70px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(#00C6FF, #0078FF);
}
::selection{
  color: #fff;
  background: #1a81ff;
}
.container{
  width: 500px;
  height: 480px;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  transition: height 0.2s ease;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}
.container.active{
  height: 590px;
}
.container .wrapper{
  width: 1000px;
  display: flex;
}
.container .wrapper section{
  width: 500px;
  background: #fff;
}
.container img{
  cursor: pointer;
}
.container .post{
  transition: margin-left 0.18s ease;
}
.container.active .post{
  margin-left: -500px;
}
.post header{
  font-size: 22px;
  font-weight: 600;
  padding: 17px 0;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
}
.post form{
  margin: 20px 25px;
}
.post form .content,
.audience .list li .column{
  display: flex;
  align-items: center;
}
.post form .content img{
  cursor: default;
  max-width: 52px;
}
.post form .content .details{
  margin: -3px 0 0 12px;
}
form .content .details p{
  font-size: 17px;
  font-weight: 500;
}
.content .details .privacy{
  display: flex;
  height: 25px;
  cursor: pointer;
  padding: 0 10px;
  font-size: 11px;
  margin-top: 3px;
  border-radius: 5px;
  align-items: center;
  max-width: 98px;
  background: #E4E6EB;
  justify-content: space-between;
}
form :where(textarea, button){
  width: 100%;
  outline: none;
  border: none;
}
form textarea{
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 100px;
}
form textarea::placeholder{
  color: #858585;
}
form textarea:focus::placeholder{
  color: #b3b3b3;
}
form :where(.theme-emoji, .options){
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theme-emoji img:last-child{
  max-width: 24px;
}
form .options{
  height: 57px;
  margin: 15px 0;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid #B9B9B9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
form .options :where(.list, li),
.audience :where(.arrow-back, .icon, li .radio){
  display: flex;
  align-items: center;
  justify-content: center;
}
form .options p{
  color: #595959;
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}
form .options .list{
  list-style: none;
}
.options .list li{
  height: 42px;
  width: 42px;
  margin: 0 -1px;
  cursor: pointer;
  border-radius: 50%;
}
.options .list li:hover{
  background: #f0f1f4;
}
.options .list li img{
  width: 23px;
}
form button{
  height: 53px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #BCC0C4;
  cursor: no-drop;
  border-radius: 7px;
  background: #e2e5e9;
  transition: all 0.3s ease;
}
form textarea:valid ~ button{
  color: #fff;
  cursor: pointer;
  background: #4599FF;
}
form textarea:valid ~ button:hover{
  background: #1a81ff;
}

</style>