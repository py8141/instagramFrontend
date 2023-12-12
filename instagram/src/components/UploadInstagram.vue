<template>
  <div class="container">
    <div class="wrapper">
      <section class="post">
        <header>Upload Post</header>
        <div class="uploadPost">
          <div class="content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622"
              class="profile-img" alt="logo">
            <div class="details">
              <p>User_Name</p>
            </div>
          </div>
          <textarea class="caption" placeholder="What's on your mind ?" spellcheck="false" required
            v-model="newCaption"></textarea>
          <div class="options">

            <label for="file" style="cursor: pointer;">Upload Photo/Video
              <input type="file" accept="image/* | video/*" name="image" id="file" @change="handleFileChange" />
            </label> <br>
            <img id="output" class="selectedImg" width="200" v-if="imageUrl" :src="imageUrl" />


          </div>
          <button @click="uploadImage" class="post-button">Post</button>
        </div>
      </section>
      <!-- <div class="file-upload-container">
                <input type="file" accept="image/*,video/*" name="media" id="file" @change="uploadFile"/>
                <label for="file" class="upload-label">Upload Image or Video (max 5MB)</label>
                <img id="output" class="uploaded-image" v-if="imageUrl" :src="imageUrl" />
         </div> -->
    </div>
  </div>
</template>
<script scoped>


import storage from '@/firebase'
import { ref } from 'vue';
import usePostStore from '../store/PostStore';
import router from '@/router';
export default {
  setup() {
    const selectedFile = ref(null);
    const postStore = usePostStore();
    let type = ref('')
    const newCaption = ref('')
    const caption = ref("");


    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file)

      selectedFile.value = file;
    }
    const uploadImage = async () => {
      console.log(selectedFile.value)
      console.log("inside")
      if (selectedFile.value) {
        const storageRef = await storage.StorageRef(storage.storage, selectedFile.value.name)
        storage.uploadBytes(storageRef, selectedFile.value).then((snapshot) => {
          console.log("Uploaded a file ", snapshot)
          storage.getDownloadURL(storage.StorageRef(storage.storage, selectedFile.value.name))
            .then((url) => {
              type = selectedFile.value.type
              console.log(selectedFile.value.type)
              router.push('/postInstagram')
              console.log(url)
              addPost(url, type)
            })
            .catch(() => {

            })
        })
      }
      const addPost = (url, type) => {
        const body = {
          userId: "65754f9169e875213b5e3454",
          username: 'john_doe',
          timestamp: new Date(),
          datatype: type,
          data: url,
          caption: newCaption.value,
        }
        console.log("Called function")
        postStore.USER_POST(body)
      }

    }
    return {
      selectedFile,
      caption,
      handleFileChange,
      uploadImage,
      newCaption,
    }
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.selectedImg {
  max-width: 100%;
  margin-top: 10px;

}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200vh;
  background: linear-gradient(#00C6FF, #0078FF);
}

::selection {
  color: #fff;
  background: #1a81ff;
}

.container {
  width: 400px;
  height: 480px;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  transition: height 0.2s ease;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.container.active {
  height: 790px;
}

.container .wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container .wrapper section {
  width: 100%;
}

.container img {
  cursor: pointer;
}

.post header {
  font-size: 22px;
  font-weight: 600;
  padding: 17px 0;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
}

.profile-img {
  max-height: 60px;
}

.uploadPost {
  padding: 16px;
}

.uploadPost textarea {
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 80px;
}

.uploadPost textarea::placeholder {
  color: #858585;
}

.uploadPost textarea:focus::placeholder {
  color: #b3b3b3;
}

.uploadPost .options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 57px;
  margin: 15px 0;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid #B9B9B9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.uploadPost .options p {
  color: #595959;
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}

.uploadPost .options .list {
  list-style: none;
}

.uploadPost .options .list li {
  height: 42px;
  width: 42px;
  margin: 0 -1px;
  cursor: pointer;
  border-radius: 50%;
}

.uploadPost .options .list li:hover {
  background: #f0f1f4;
}

.uploadPost .options .list li img {
  width: 23px;
}

.uploadPost .post-button {
  height: 53px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  width: 300px;
  cursor: pointer;
  border-radius: 7px;
  background: #e2e5e9;
  transition: all 0.3s ease;
}

.uploadPost textarea:valid~.post-button {
  color: #fff;
  cursor: pointer;
  background: #4599FF;
}

.uploadPost textarea:valid~.post-button:hover {
  background: #1a81ff;
}

.uploadPost .post-button:hover {
  background: #1a81ff;
}
</style>



<!-- <style scoped>




.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.upload-label {
  cursor: pointer;
  padding: 10px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
}

.uploaded-image {
  width: 200px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

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
  min-height: 200vh;
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
.uploadPost :where(textarea){
  width: 100%;
  outline: none;
  border: none;
}
.uploadPost textarea{
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 80px;
}
.uploadPost textarea::placeholder{
  color: #858585;
}
.uploadPost textarea:focus::placeholder{
  color: #b3b3b3;
}
.uploadPost :where(.theme-emoji, .options){
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theme-emoji img:last-child{
  max-width: 24px;
}
 .options{
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
 .options p{
  color: #595959;
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}
 .options .list{
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
.post-button{
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
.post-button:hover{
  background: #1a81ff;
}
</style> -->