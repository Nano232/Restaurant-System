<template>
  <form @click.prevent>
    <div class="container-fluid">
      <div class="row m-3 align-items-center">
        <h1>Log In</h1>
        <div class="col-auto d-block mx-auto">
          <input
            type="emal"
            class="form-control"
            placeholder="Enter Your Email"
            v-model="email"
          />
        </div>
      </div>
      <div class="row m-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <input
            type="password"
            class="form-control"
            placeholder="Enter Your Password"
            v-model="pass"
          />
        </div>
      </div>
      <div class="row m-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <button type="submit" class="btn btn-primary">Log In</button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary" @click="SingupPage()">
            Sing Up
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginContent",
  data() {
    return {
      pass: "",
      email: "",
    };
  },

  methods: {
    SingupPage() {
      this.$router.push({ name: "SingupPage" });
    },
  },
};
</script>
