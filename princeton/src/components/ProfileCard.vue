<template>
  <div class="profile-card">
    <div class="profile-header">{{ user.name }}</div>
    <div class="profile-body">
      <div class="profile-body-left">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          alt="profile"
        />
      </div>
      <div class="profile-body-right">
        <div class="profile-body-right-top">
          <div class="profile-body-right-top-left">
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileCard",
  data() {
    return {
      user: {
        name: "John Doe",
        email: "blahblahblah",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.profile-card {
  color: white;
  width: 30%;
  margin: auto;
  position: absolute;
  top: 10%;
  left: 2%;

  background: #2d2b2b;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}
.profile-header {
  background: #1e1e1e;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 600;
}
.profile-body {
  display: flex;
  padding: 20px;
}
.profile-body-left {
  flex: 1;
  img {
    width: 100%;
    border-radius: 50%;
  }
}
.profile-body-right {
  flex: 2;
  padding-left: 20px;
}
.profile-body-right-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
  }
}
.profile-body-right-top-left {
  flex: 1;
}
.profile-body-right-top-right {
  flex: 1;
  text-align: right;
  button {
    background: #1e1e1e;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #2d2b2b;
    }
  }
}
.profile-body-right-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  p {
    font-size: 1rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.profile-body-right-bottom-left {
  flex: 1;
}
.profile-body-right-bottom-right {
  flex: 1;
  text-align: right;
}
</style>
