<template>
    
<div class="container" ref="vantaRef">

</div>


</template>

<style>

.fin{
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  
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