<template>
  <html ref="vantaRef">
    <div class="container" data-aos="fade-left">
      <h1 class="title">Random Swim Workout Generator</h1>

      <h2 class="survey_input">What do you want to get better at?</h2>

      <select name="race" id="survey_input" v-model="WorkOn">
        <option value="blank"></option>
        <option value="optFree">50 Freestyle</option>
      </select>

      <div v-if="opFree()">
        <h2 class="survey_input">How much time do you have to swim?</h2>
      </div>

      <div v-if="opFree()">
        <select name="time" id="survey_input" v-model="selected">
          <option value="blank"></option>
          <option value="opt1">30 minutes</option>
          <option value="opt2">60 minutes</option>
        </select>
      </div>

      <br />

      <div v-if="op1()">
        <button id="generate_btn" @click="randomID1">Generate</button>
      </div>

      <div v-if="op2()">
        <button id="generate_btn" @click="randomID2">Generate</button>
      </div>
      <!-- indicate that this is only for 50 free somehow -->
      <div class="generated_wo" v-if="show">
        <button
          class="pdf-btn"
          type="button"
          @click="generatePDF(randomWU, randomSET)"
        >
          Generate PDF
        </button>
        <h2>What to focus on</h2>
        <p class="describe">
          When swimming, be mindful to try to breathe as little as possible
          during sprints,explode off starts and turns, while keeping good form.
        </p>
        <h2>Warm Up</h2>
        <ul>
          <li v-bind:key="exercise" v-for="exercise in randomWU">
            {{ exercise }}
          </li>
        </ul>
        <h2>Main Set</h2>
        <ul>
          <li v-bind:key="exercise" v-for="exercise in randomSET">
            {{ exercise }}
          </li>
        </ul>
      </div>
      <!-- <p>{{ randomWU }}</p> -->
      <!-- <br /> -->
      <!-- <p>{{ randomSET }}</p> -->
    </div>
  </html>
</template>

<script>
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import AOS from "aos";

import jsonDescriptions from "../descriptions.json";

import jsonWarmUp1 from "../warmup-1.json";
import jsonWarmUp2 from "../warmup-2.json";
import jsonWarmUp3 from "../warmup-3.json";
import jsonWarmUp4 from "../warmup-4.json";

import jsonMainSet1 from "../set-1.json";
import jsonMainSet2 from "../set-2.json";
import jsonMainSet3 from "../set-3.json";
import jsonMainSet4 from "../set-4.json";

import jsPDF from "jspdf";

export default {
  data() {
    return {
      show: false,
      Descriptions: jsonDescriptions,
      WarmUp1: jsonWarmUp1,
      WarmUp2: jsonWarmUp2,
      WarmUp3: jsonWarmUp3,
      WarmUp4: jsonWarmUp4,
      MainSet1: jsonMainSet1,
      MainSet2: jsonMainSet2,
      MainSet3: jsonMainSet3,
      MainSet4: jsonMainSet4,
      notrandomD: null,
      randomWU: null,
      randomSET: null,
      //randomWUSET: randomWU+randomSET,
      selected: null,
      WorkOn: null,
    };
  },
  methods: {
    randomID2() {
      const randomIndex = Math.floor(Math.random() * jsonWarmUp1.wu.length);
      const randomIndex1 = Math.floor(Math.random() * jsonMainSet1.set.length);
      this.randomWU = jsonWarmUp1.wu[randomIndex].exercises;
      this.randomSET = jsonMainSet1.set[randomIndex].exercises;
      this.show = !this.show;
    },
    randomID1() {
      const randomIndex = Math.floor(Math.random() * jsonWarmUp2.wu.length);
      const randomIndex1 = Math.floor(Math.random() * jsonMainSet2.set.length);
      this.randomWU = jsonWarmUp2.wu[randomIndex].exercises;
      this.randomSET = jsonMainSet2.set[randomIndex].exercises;
      this.show = !this.show;
    },
    concatenateWUSET() {
      return this.randomWU + this.randomSET;
    },
    generatePDF(wu, set) {
      const doc = new jsPDF();
      //doc.text(20,30,"What to Focus On")
      //doc.text(10,10,tips);
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");

      // Add "Warm Up" heading
      doc.text("Warm Up", doc.internal.pageSize.getWidth() / 2, 20, {
        align: "center",
      });

      // Reset font size and family
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Add warm-up exercises
      const splitWU = doc.splitTextToSize(
        wu,
        doc.internal.pageSize.getWidth() - 40
      );
      doc.text(wu, 20, 30);

      // Set font size and family
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");

      // Add "Main Set" heading
      doc.text("Main Set", doc.internal.pageSize.getWidth() / 2, 70, {
        align: "center",
      });

      // Reset font size and family
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");

      // Add main set exercises
      const splitSet = doc.splitTextToSize(
        set,
        doc.internal.pageSize.getWidth() - 40
      );
      doc.text(set, 20, 80);
      doc.save("mySwimWorkout.pdf");
    },
    op1() {
      return this.selected === "opt1";
    },
    op2() {
      return this.selected === "opt2";
    },

    opFree() {
      return this.WorkOn === "optFree";
    },
  },
  mounted() {
    AOS.init();
    this.vantaEffect = WAVES({
      el: this.$refs.vantaRef,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 800.0,
      minWidth: 110.0,
      scale: 1.0,
      scaleMobile: 1.0,
      shininess: 79.0,
      waveHeight: 17.5,
      waveSpeed: 1.5,
      zoom: 1.09,
    });
  },

  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style lang="scss" scoped>
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
  position: center;
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
  height: 3rem;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000006a;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}

.describe {
  text-align: center;
  font-size: 1.5rem;
  width: 75%;
  color: black;
  font-family: "Quicksand", sans-serif;
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
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
}
.pdf-btn {
  text-align: center;
  border-radius: 10px;
  width: 8rem;
  height: 4rem;
  border: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;
  background-color: #0000006a;
  outline: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    background-color: rgba(0, 0, 0, 0.602);
  }
  margin-top: 1rem;
  cursor: pointer;
}
.generated_wo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  color: #000000;
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  text-align: left;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  margin: 2rem;
  margin-bottom: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
}
</style>
