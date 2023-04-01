<template>
  <div class="container">
    <div id="login">
      <input id="email" type="text" ref="email" />
      <br />
      <input id="password" type="text" ref="password" />
    </div>
  </div>
</template>

<style>
body {
  background-image: url("../assets/water.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 1500px 1000px;
}

#login {
  border: 5px solid;
  width: 200px;
  height: 350px;
  font-size: 22px;
  background-color: brown;
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
</style>

<script>
// the relevant methods
import { collection, addDoc } from "firebase/firestore"
// the firestore instance
import db from './firebase/init.js'

export default {
  created() {
    this.createUser()
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, 'users')
      // data to send
      const dataObj = {
        firstName: 'John',
        lastName: 'Doe',
        dob: '1990'
      }

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)

      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    }
  }
}
</script>
