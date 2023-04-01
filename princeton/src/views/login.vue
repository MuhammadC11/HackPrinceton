<template>
  <div class="login_container">
    <form>
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

#email {
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
#password {
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

.inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.search-btn {
  font-size: 1.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 1.2rem;
  font-weight: 700;
  transition: transform 200ms, background 200ms;
}
.submit-btn {
  // create a hover effect that makes the button a little bit bigger and darker
  background-color: rgba(39, 38, 38, 0.979);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.submit-btn:hover {
  // create a hover effect that makes the button a little bit bigger and darker
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}
.clear-btn {
  font-size: 1.5rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 1.2rem;
  font-weight: 700;
  transition: transform 200ms, background 200ms;
}
.clear-btn:hover {
  // create a hover effect that makes the button a little bit bigger and darker

  transform: translateY(-2px);
}
.clear-btn:focus-visible {
  outline: 1px solid #000;
  outline-offset: 1px;
}

.item {
  display: flex;
  align-items: center;
  height: 5rem;
  width: 100vw;
  background-color: transparent;

  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.478);
  }
  p {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    width: 100%;
  }
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
