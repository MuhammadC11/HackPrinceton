<template>
<div class="temp">

<br>
<br>

<h1> What is your 50 Yard Freestyle time? </h1>

<input  
id = "lev_input" 
v-model = "level"
placeholder = "Enter here:"
/> 


</div>
</template>

<style lang = "scss" scoped>
.temp{
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  
}

h1{
    color:white;
}

button{
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

<script>
export default{
    data(){
        return{
            level: null
        }
    },
    method:{
        intermediateS(){
            
        },
        beginnerS(){

        }
    }
}


</script>