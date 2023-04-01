<template>
  <body ref="vantaRef">
    <div class="container" data-aos="fade-left">
      <h1 class="title">Random Swim Workout Generator</h1>

      <h2 class="survey_input">What do you want to get better at?</h2>

      <select name="race" id="survey_input">
        <option value="blank"></option>

        <option value="50 Freestyle">50 Freestyle</option>
      </select>

      <h2 class="survey_input">How much time do you have to swim?</h2>

      <select name="time" id="survey_input" v-model = "selected">
        <option value="blank"></option>
        <option value="opt1" > 30 minutes </option>
        <option value="opt2" > 60 minutes </option>
      </select>

      <br />

      <div v-if="op1()">

      <button id="generate_btn" @click="randomID1" > Generate </button>

      </div>

      <div v-if="op2()">
      
      <button id="generate_btn" @click="randomID2" > Generate </button>
      
      </div>

      <div v-if="show">

          <p>  {{ randomWU }} </p>
          <br>
          <p>  {{ randomSET }} </p>

      </div>

    </div>
  </body>
</template>

<script>
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import AOS from "aos";
import jsonWarmUp1 from "../warmup-1.json";
import jsonWarmUp2 from "../warmup-2.json";
import jsonWarmUp3 from "../warmup-3.json";
import jsonWarmUp4 from "../warmup-4.json";

import jsonMainSet1 from "../set-1.json";
import jsonMainSet2 from "../set-2.json";
import jsonMainSet3 from "../set-3.json";
import jsonMainSet4 from "../set-4.json";

export default {
  data() {
    return {
      show: false,
      WarmUp1: jsonWarmUp1,
      WarmUp2: jsonWarmUp2,
      WarmUp3: jsonWarmUp3,
      WarmUp4: jsonWarmUp4,
      MainSet1: jsonMainSet1,
      MainSet2: jsonMainSet2,
      MainSet3: jsonMainSet3,
      MainSet4: jsonMainSet4,
      randomWU: null,
      randomSET: null,
      selected: null
  
    };
  },
  methods: {
    randomID2(){
      const randomIndex = Math.floor(Math.random() * jsonWarmUp1.wu.length)
      const randomIndex1 = Math.floor(Math.random() * jsonMainSet1.set.length)
      this.randomWU = jsonWarmUp1.wu[randomIndex].exercises
      this.randomSET = jsonMainSet1.set[randomIndex].exercises
      this.show = !this.show
    },
    randomID1(){
      const randomIndex = Math.floor(Math.random() * jsonWarmUp2.wu.length)
      const randomIndex1 = Math.floor(Math.random() * jsonMainSet2.set.length)
      this.randomWU = jsonWarmUp2.wu[randomIndex].exercises
      this.randomSET = jsonMainSet2.set[randomIndex].exercises
      this.show = !this.show
    },
    op1(){
      return this.selected === 'opt1'
    },
    op2(){
      return this.selected === 'opt2'
    },
    mounted() {
    AOS.init();
    this.vantaEffect = WAVES({
      el: this.$refs.vantaRef,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      shininess: 60.0,
      waveHeight: 17.5,
      waveSpeed: 1.1,
      zoom: 1.12,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
}
}
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
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}
</style>
