<template>
  <div class="navbar_container">
    <div class="home_button">
      <router-link to="/" aria-label="link to the homepage">
        <button class="button1">Home</button>
      </router-link>
    </div>

    <div class="login-btn">
      <router-link v-if="!isLoggedIn" to="/login">
        <button class="button1">Login</button>
      </router-link>
    </div>

    <div class="logout-btn">
      <router-link to="/login">
        <button @click="handleSignOut" v-if="isLoggedIn" class="button1">
          Logout
        </button>
      </router-link>
    </div>

    <div class="profile-btn">
      <router-link v-if="isLoggedIn" to="/dashboard">
        <button class="button1">Dashboard</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
const isLoggedIn = ref(false);
let auth;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      isLoggedIn.value = false;
      router.push("signin");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap";

.home_button {
  margin-left: 30px;
  margin-right: 55rem;
}
.login-btn {
  margin-left: 15rem;
  margin-right: 30px;
}
.logout-btn {
  margin-left: -10rem;
  margin-right: 30px;
}
.gh_button {
  border: none;
  outline: none;
  padding: 0.5em 1.1em;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
  background-color: rgba(176, 255, 160, 0.233);
  color: #fff;

  cursor: pointer;
  border-radius: 2.5px;
  user-select: none;
  transition: ease-in-out 0.15s all;
}

.gh_button:hover {
  color: #000;
}

.gh_button:active {
  animation: click 0.15s ease-in-out;
}
.gh_button {
  font-size: 18px;
  color: #ffffff;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
  text-decoration: none;
  display: flex;
  align-self: right;
}
.button1 {
  font-size: 18px;
  color: #ffffff;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}
.gh_button:focus,
.gh_button:hover {
  color: #fff;
}

.gh_button:focus:after,
.gh_button:hover:after {
  width: 100%;
  left: 0%;
}

.gh_button:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}

.button1:focus,
.button1:hover {
  color: #fff;
}

.button1:focus:after,
.button1:hover:after {
  width: 100%;
  left: 0%;
}

.button1:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
.navbar_container {
  text-align: center;
  align-items: left;
  display: flex;
  width: 100%;
  background-color: #ffffff00;
  position: fixed;
  z-index: 8;
  margin-top: 1rem;
}
.about_button {
  display: flex;
  align-self: right;
}
/*
.button {
  background-color: #e1e5ed00;

  border-radius: 15px;

  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;

  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);

  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.button:disabled {
  pointer-events: none;
}

.button:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button:active {
  box-shadow: none;
  transform: translateY(0);
}
*/
</style>
