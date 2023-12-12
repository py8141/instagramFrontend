

<template>
  <div class="bg-img">
    <div class="content">
      <header>Let's Register</header>
      <form action="#">
        <div class="main-container">
          <!-- Form Container -->
          <div class="form-container">
            <div class="field">
              <input type="text" required placeholder=" Username">
            </div>
            <div class="field space">
              <input type="text" required placeholder=" Enter your name">
            </div>
            <div class="field space">
              <input type="text" required placeholder=" Bio">
            </div>

            <div class="field space">
              <select class="dropdown">
                <option value="" disabled selected>Account Type</option>
                <option value="1">Personal</option>
                <option value="2">Business</option>
              </select>
            </div>

            <div class="field space">
              <select class="dropdown">
                <option value="" disabled selected>Account Visibility</option>
                <option value="1">Public</option>
                <option value="2">Private</option>
              </select>
            </div>
          </div>

          <!-- Profile Container -->
          <div class="profile-container">
            <label for="profile-photo" class="profile-label">
              <img src="../assets/default-profile.jpeg" alt="Profile Photo" class="profile-image">
              <div class="plus-icon">+</div>
              <input type="file" id="profile-photo" class="hidden-input">
            </label>
          </div>

          <!-- Submit Button -->
          <div class="field space button">
            <input type="submit" @click="sendToheader" value="SUBMIT">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script src="@/js/Registry.js"></script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .form-container {
    width: 50%;
  }

  .profile-container {
    width: 30%;
    text-align: center;
    position: relative;
  }

  .bg-img {
    background: url(../assets/bg5.jpeg);
    height: 90vh;
    background-size: cover;
    background-position: center;
  }

  .bg-img:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.4);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    text-align: center;
    padding: 60px 32px;
    width: 700px;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
  }

  .content header {
    color: black;
    font-size: 33px;
    font-weight: 600;
    margin: 0 0 35px 0;
    font-family: 'Montserrat', sans-serif;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .field {
    position: relative;
    border-radius: 7px;
    height: 45px;
    width: 100%;
    display: flex;
    background: rgba(255, 255, 255, 0.94);
  }

  .field input,
  .dropdown {
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #222;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  .field.space {
    margin-top: 16px;
  }

  .field.space.button {
    text-align: center;
    width: 30%;
    margin: 0 auto;
    margin-top: 16px;
    border-radius: 50%;
  }

  .field input[type="submit"] {
    background: #535454;
    color: white;
    font-size: 14px;
    padding: 10px 20px;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  .field input[type="submit"]:hover {
    background: #050505;
  }

  .profile-container {
    position: relative;
    width: 30%;
    text-align: center;
  }

  .profile-label {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .profile-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }

  .plus-icon {
    position: absolute;
    bottom: 10px;
    right: 5px;
    background-color: rgb(6, 5, 5);
    color: white;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    font-size: 30px;
  }

  .plus-icon:hover {
    background-color: rgb(110, 109, 109);
  }

  .hidden-input {
    display: none;
  }


  @media (max-width: 1024px) {

.content {

  width: 80%;

  padding: 50px 32px;

}

}



@media (max-width: 768px) {

.content {

  width: 90%;

  padding: 40px 20px;

}



.main-container {

  flex-direction: column;

  align-items: center;

}

.field{
  width:70%;
  align-items: center;
  transform: translateX(15%);
}



.form-container,

.profile-container {

  width: 100%;

}

.profile-image {

  width: 30%;

  height: auto;

  border-radius: 50%;

  overflow: hidden;

  object-fit: cover;
  transform: translateY(10px);

}

.plus-icon {

  right: 36%;

  transform: translateX(50%);
  font-size: 20px;

}

}



@media (max-width: 480px) {

.content {

  width: 100%;

  padding: 30px 16px;

}
}
</style>
