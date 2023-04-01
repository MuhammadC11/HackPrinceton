<template>
  <body>
    <div class="container">
      <h1 class="title">Random Swim Workout Generator</h1>
      

      <h2 class="survey_input">What do you want to get better at?</h2>

      <select name="race" id="survey_input">
        <option value="blank"></option>
        <option value="Recreational Lap Swimming">
          Recreational Lap Swimming
        </option>
        <option value="50 Freestyle">50 Freestyle</option>
      </select>

      <h2 class="survey_input">How much time do you have to swim?</h2>

      <select name="time" id="survey_input">
        <option value="blank"></option>
        <option value="30 minutes">30 minutes</option>
        <option value="60 minutes">60 minutes</option>
      </select>

      <br />

      <button id="generate_btn" @click="showWorkout, randomID" > Generate </button>

      <div v-if="show">

          <p>  {{ randomID }}</p>

      </div>

    </div>
  </body>
</template>

<script>
import jsonWarmUp from "../warmup.json";

import jsonMainSet from "../set.json";

export default {
  data() {
    return {
      show: false,
      WarmUp: jsonWarmUp,
      MainSet: jsonMainSet,
    };
  },
  methods: {
    showWorkout() {
      this.show = !this.show;
    },
    randomID(){
      const randomIndex = Math.floor(Math.random() * jsonWarmUp.wu.length)
      this.randomId = jsonWarmUp.wu[randomIndex].id
    }
  }
};
</script>

<style lang="scss">
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

select {
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

#generate_btn {
  text-align: center;
  width: 20rem;
  height: 4rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #000000ba;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}
</style>
