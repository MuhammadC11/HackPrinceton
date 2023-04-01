<template>
  <div>
    <form class="login_container" @submit.prevent="login()">
      <h1>Sign in to an existing account</h1>
      <div class="inputs">
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

      <h5>Don't have an account?</h5>
      <div class="register-btn">
        <router-link to="/register">
          <button class="button1">Register</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const email = ref("");
const password = ref("");
const errorMsg = ref();
//const router = useRouter();
const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push("/dashboard");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/invalid-email":
          errorMsg.value = "Invalid email address";
          break;
        case "auth/user-disabled":
          errorMsg.value = "User disabled";
          break;
        case "auth/user-not-found":
          errorMsg.value = "User not found";
          break;
        case "auth/wrong-password":
          errorMsg.value = "Wrong password";
          break;
        default:
          errorMsg.value = "Unknown error";
      }
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
h1{
  font-size: 1.5rem;
  color: #ffffff;
  font-family: "Quicksand", sans-serif;
  margin: auto;
  margin-top: 75px;
}
</style>
