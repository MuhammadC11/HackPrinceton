<template>
  <div>
    <form id="signup" class="login_container" @submit.prevent="register()">
      <div class="inputs">
        <h1>Create an account</h1>
        <label id="el"> Email: </label>
        <input
          id="email"
          type="text"
          v-model="email"
          placeholder="Enter your email"
        />

        <label id="pl"> Password: </label>
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Enter your password"
        />
        <button type="submit" class="submit-btn" aria-label="Submit.">
          Submit
        </button>
        <p v-if="errorMsg">{{ errorMsg }}</p>
      </div>

      <h5>Already have an account?</h5>
      <div class="login-btn">
        <router-link to="/login">
          <button class="button1">Login</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const email = ref("");
const password = ref("");
//const router = useRouter();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push("/dashboard");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};
</script>

<style lang="scss" scoped>
.login_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
}

#el {
  font-size: 1.5rem;
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  margin: auto;
}

#pl {
  font-size: 1.5rem;
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  margin: auto;
}

input {
  text-align: center;
  width: 20rem;
  height: 4rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000006a;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}

.submit-btn {
  text-align: center;
  width: 10rem;
  height: 3rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000006a;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
  margin-top: 1rem;
}

body {
  background-color: #0094fe;
}
.title {
  text-align: center;
  font-size: 3rem;
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
}
.survey_input {
  font-size: 1.5rem;
  color: #ffffff;
  font-family: "Quicksand", sans-serif;

  margin: auto;
}
</style>
