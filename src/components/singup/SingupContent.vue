<template>
  <form @click.prevent>
    <div class="container-fluid">
      <div class="row m-3 align-items-center">
        <h1>SIng Up</h1>
        <div class="col-auto d-block mx-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Name"
            v-model="name"
          />
        </div>
      </div>
      <div class="row m-3 align-items-center">
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
          <button type="submit" class="btn btn-primary">Sing Up Now</button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary" @click="LoginPage()">
            Log In
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SingupContent",
  data() {
    return {
      name: "",
      pass: "",
      email: "",
    };
  },

  methods: {
    LoginPage() {
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>
