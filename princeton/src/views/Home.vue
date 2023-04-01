<template>
  <body>
    <title>Random Swim Workout Generator</title>
  <div class = "container">
    <div id="title">
      <h3> Random Swim </h3>
    </div>
    <h5 id = "survey_input">What level swimmer are you?</h5>
  <select name="level" id="survey_input">
    <option value="blank"> </option>
    <option value="beginner">beginner</option>
    <option value="intermediate">intermediate</option>
  </select>
    <h5 id = "survey_input">What do you want to get better at?</h5>
  <select name="race" id="survey_input">
    <option value="blank"> </option>
    <option value="Recreational Lap Swimming">Recreational Lap Swimming</option>
    <option value="50 Freestyle">50 Freestyle</option>
  </select>
    <h5 id = "survey_input">How much time do you have to swim?</h5>
  <select name="time" id="survey_input">
    <option value="blank"> </option>
    <option value="30 minutes">30 minutes</option>
    <option value="60 minutes">60 minutes</option>
</select>
<p> </p>
<button id="survey_input">Generate</button>
</div>
</body>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  position: fixed;
  background-color: rgb(32, 139, 227);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 1500px 1000px;
}
#title{
  font-size: 50px;
  color: black;
  position: relative;
  top: 40%;
  left: 40%;
}
#survey_input{
  position: relative;
  top: 50%;
  left: 40%;
}

</style>



// Path: princeton\src\views\Home.vue
