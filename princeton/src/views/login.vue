<template>
  <div>
    <form class="login_container">
      <div class="inputs">
        <label id="el"> Email: </label>
        <input
          id="email"
          type="text"
          v-model="login"
          placeholder="Enter your email"
        />

        <label id="pl"> Password: </label>
        <input
          id="password"
          type="text"
          v-model="password"
          placeholder="Enter your password"
        />
        <button type="submit" class="submit-btn" aria-label="Submit.">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
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

<script>
// the relevant methods
import { collection, addDoc } from "firebase/firestore";
// the firestore instance
import { db } from "../firebase/init";

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
