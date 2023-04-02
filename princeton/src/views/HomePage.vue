<template>

<div class="container" ref="vantaRef">

<br>
<br>
<br>

<h1> Welcome to your Swim Set Workout Generator! </h1>

<h2> </h2>

<br>

<router-link to="/home" id = "button">
    <button> To The Generator </button>
</router-link>

</div>



</template>

<style>

h1{

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  color: white;
  font-size: 100px;
  text-align: center;
  
}

#button{
    left: 45%;
    width: 300px;
    height: 25px;
}
</style>

<script>
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

export default {
mounted() {
   
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
  }
}
</script>