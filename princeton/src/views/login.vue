<template>
  <div class="container">
    <div id="login">
      <label id="el"> Email: </label>
      <input id="email" type="text" ref="email" v-model="login" />

      <label id="pl"> Password: </label>
      <input id="password" type="text" ref="password" v-model="password" />

      <button>Register</button>
    </div>
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
export default {
  data() {
    return {
      login: "",
      password: "",
    };
  },
};
</script>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      test: "",
    };
  },
};
</script>
