<template>
  <div class="workouts">
    <div class="workouts-header">
      <h1>Workouts</h1>
    </div>
    <div class="workouts-body">
      <div class="workouts-body-left">
        <div class="workouts-body-left-top">
          <div class="workouts-body-left-top-left">
            <h2>Workout 1</h2>
          </div>
          <div class="workouts-body-left-top-right">
            <h2>Workout 2</h2>
          </div>
        </div>
        <div class="workouts-body-left-bottom">
          <div class="workouts-body-left-bottom-left">
            <h2>Workout 3</h2>
          </div>
          <div class="workouts-body-left-bottom-right">
            <h2>Workout 4</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Workouts",
};
</script>

<style lang="scss" scoped>
.workouts {
  color: white;
  width: 95%;
  margin: auto;
  position: absolute;
  top: 35%;
  left: 2%;
  background: #2d2b2b;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
.workouts-header {
  background: #1e1e1e;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;
}
.workouts-body {
  padding: 20px;
}
.workouts-body-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 3rem;
}
.workouts-body-left-top {
  flex: 1;
  display: flex;
}
.workouts-body-left-top-left {
  flex: 1;
  background: #1e1e1e;
  margin-right: 10px;
  border-radius: 10px;
  padding: 20px;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.workouts-body-left-top-right {
  flex: 1;
  background: #1e1e1e;
  margin-left: 10px;
  border-radius: 10px;
  padding: 20px;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.workouts-body-left-bottom {
  flex: 1;
  display: flex;
  margin-top: 10px;
}
.workouts-body-left-bottom-left {
  flex: 1;
  background: #1e1e1e;
  margin-right: 10px;
  border-radius: 10px;
  padding: 20px;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.workouts-body-left-bottom-right {
  flex: 1;
  background: #1e1e1e;
  margin-left: 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
