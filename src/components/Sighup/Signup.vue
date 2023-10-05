<template>
  <div class="container">
    <form action="">
      <div class="row align-items-center" style="">
        <h1>Sign Up</h1>
        <div class="col-12 m-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Name"
            v-model="name"
          />
          <span class="error-feedback" v-if="v$.name.$error">{{
            v$.name.$errors[0].$message
          }}</span>
        </div>
        <div class="col-12 m-3">
          <input
            type="email"
            class="form-control"
            placeholder="Enter Your Email"
            v-model="email"
          />
          <span class="error-feedback" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
        </div>
        <div class="col-12 m-3">
          <input
            type="password"
            class="form-control"
            placeholder="Enter Your Password"
            v-model="pass"
          />
          <span class="error-feedback" v-if="v$.pass.$error">{{
            v$.pass.$errors[0].$message
          }}</span>
        </div>
        <div class="col-12 m-3">
          <button type="button" class="btn btn-primary" @click="singupNow">
            SignUp Now
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-link" @click="loginPage()">
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  name: "SignUpFoem",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      pass: { required, minLength: minLength(8) },
      email: { required, email },
    };
  },
  methods: {
    loginPage() {
      this.$router.push({ name: "LogInPage" });
    },
    singupNow() {
      this.v$.$validate();
    },
  },
};
</script>

<style lang="scss" scoped>
.container .row {
  width: 60%;
  margin: 50px auto;
  span {
    color: red;
    font-size: 0.85em;
  }
}
@media (max-width: 800px) {
  .container .row {
    width: 80%;
  }
}
</style>
