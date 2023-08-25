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
          <span class="error-feedback" v-if="v$.name.$error">{{
            v$.name.$errors[0].$message
          }}</span>
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
          <span class="error-feedback" v-if="v$.email.$error">{{
            v$.email.$errors[0].$message
          }}</span>
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
          <span class="error-feedback" v-if="v$.pass.$error">{{
            v$.pass.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row m-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <button type="submit" @click="singUpNow()" class="btn btn-primary">
            Sing Up Now
          </button>
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
// validate
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "SingupContent",
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
      name: { required },
      pass: { required, minLength: minLength(8) },
      email: { required, email },
    };
  },

  methods: {
    LoginPage() {
      this.$router.push({ name: "LoginPage" });
    },
    singUpNow() {
      this.v$.$validate();
      // if (!this.v$.$error) {
      //   console.log("Form Validated Successfully");
      // } else {
      //   console.log("Form Validation Faild");
      // }
    },
  },
};
</script>
<style scoped lang="scss">
.error-feedback {
  color: red;
  font-size: 0.85em;
}
</style>
