<template>
  <div>
    <ProfileCard />
    <Workouts />
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";
import Workouts from "../components/Workouts.vue";
export default {
  components: {
    ProfileCard,
    Workouts,
  },
};
</script>

<style lang="scss" scoped></style>
