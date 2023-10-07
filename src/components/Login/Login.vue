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
          <button type="button" class="btn btn-primary" @click="LoginNow()">
            LogIn Now
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-link" @click="signupPage()">
            SignUp
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
const sweetalert = require("sweetalert");
import axios from "axios";
export default {
  name: "LogInForm",
  data() {
    return {
      v$: useVuelidate(),
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      pass: { required },
      email: { required, email },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    signupPage() {
      this.$router.push({ name: "SignupPage" });
    },
    async LoginNow() {
      this.v$.$validate();
      let result = await axios.get(
        `https://json-server-api-one.vercel.app/users?email=${this.email}&pass=${this.pass}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "home" });
      } else {
        sweetalert({
          title: "User Not Found",
          icon: "error",
        });
      }
      console.log(result);
    },
  },
};
</script>

<style lang="scss" scoped>
.container .row {
  width: 60%;
  margin: 50px auto 0;
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
