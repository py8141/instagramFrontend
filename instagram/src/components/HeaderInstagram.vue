<template>
<div class="main-content">
        <div class="sidebar">
                <router-link to="/postInstagram">HOME</router-link>
                <router-link to="/search">SEARCH</router-link>
                <router-link to="/profile">PROFILE</router-link>
                <router-link to="/upload">UPLOAD</router-link>
                <router-link to="/activity">ACTIVITY</router-link>
        </div>

        <div class="content">
                <div class= "logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png?20210403190622" width="30px" height="30px">INSTAGRAM</div>
                <router-view></router-view>
        </div>
</div>
</template>
<script>
</script>
<style scoped>

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
  height: 1000px;
}
.content::webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 700px) {
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

  /*@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }*/
}
</style>