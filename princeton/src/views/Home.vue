<template>
  <body>
    <h1 class="title">Random Swim Workout Generator</h1>
    <div class="container">
      <h2 class="survey_input">What level swimmer are you?</h2>
      <select name="level" id="survey_input">
        <option value="blank"></option>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
      </select>
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
      <p></p>
      <button id="generate_btn">Generate</button>
    </div>
  </body>
</template>

<script>
export default {};
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
  margin-top: 5rem;
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
