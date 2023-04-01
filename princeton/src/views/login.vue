<template>
  <div class="container">
    <form @submit.prevent="callApi()">
      <label id="el"> Email: </label>
      <input
        id="email"
        type="text"
        ref="email"
        v-model="login"
        placeholder="Enter your email"
      />

      <label id="pl"> Password: </label>
      <input
        id="password"
        type="text"
        ref="password"
        v-model="password"
        placeholder="Enter your password"
      />

      <button type="submit">Register</button>
    </form>
  </div>

  <p>{{ login }}</p>
</template>

<style>
body {
  background-color: rgb(32, 139, 227);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 1500px 1000px;
}

#login {
  border: 1px solid;
  width: 200px;
  height: 350px;
  font-size: 22px;
  background-color: white;
  padding: 30px; /* space between content and the border */
  margin: 10px;
  position: absolute;
  top: 23%;
  left: 40%;
}

#email {
  position: relative;
  top: 40%;
  left: 13%;
}

#password {
  position: relative;
  top: 45%;
  left: 13%;
}

button {
  position: relative;
  top: 50%;
  left: 30%;
}

#el {
  position: relative;
  top: 20%;
  left: 30%;
}

#pl {
  position: relative;
  top: 30%;
  left: 30%;
}
</style>

<script>
// the relevant methods
import { collection, addDoc } from "firebase/firestore";
// the firestore instance
import db from "./firebase/init.js";

export default {
  data() {
    return {
      login: "",
      password: "",
      test: "",
    };
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, "users");
      // data to send
      const dataObj = {
        firstName: "John",
        lastName: "Doe",
        dob: "1990",
      };

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj);

      // access auto-generated ID with '.id'
      console.log("Document was created with ID:", docRef.id);
    },
  },
};
</script>
