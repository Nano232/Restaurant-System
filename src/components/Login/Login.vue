<template>
  <div class="container">
    <form action="">
      <div class="row align-items-center" style="">
        <h1>Log In</h1>
        <div class="col-12 m-3">
          <input
            type="email"
            class="form-control"
            placeholder="Enter Your Email"
            v-model="email"
          />
        </div>
        <div class="col-12 m-3">
          <input
            type="password"
            class="form-control"
            placeholder="Enter Your Password"
            v-model="pass"
          />
        </div>
        <div class="col-12 m-3">
          <button type="submit" class="btn btn-primary">LogIn Now</button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary" @click="signupPage()">
            SignUp
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LogInForm",
  data() {
    return {
      pass: "",
      email: "",
    };
  },
  methods: {
    signupPage() {
      this.$router.push({ name: "SignupPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container .row {
  width: 60%;
  margin: 50px auto;
}
@media (max-width: 800px) {
  .container .row {
    width: 80%;
  }
}
</style>
