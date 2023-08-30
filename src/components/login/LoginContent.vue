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
            v-model="state.email"
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
            v-model="state.pass"
          />
          <span class="error-feedback" v-if="v$.pass.$error">{{
            v$.pass.$errors[0].$message
          }}</span>
        </div>
      </div>
      <div class="row m-3 align-items-center">
        <div class="col-auto d-block mx-auto">
          <button type="submit" @click="logInNow()" class="btn btn-primary">
            Log In
          </button>
          &nbsp;&nbsp;&nbsp;
          <button type="button" class="btn btn-primary" @click="SingupPage()">
            Sing Up
          </button>
        </div>
      </div>
      <br />
      <div class="row g-3 align-items-center">
        <div class="col-auto d-block mx-auto error-feedback">
          {{ userNotFoundErr }}
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// validate
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import axios from "axios";
import { reactive, computed } from "vue";
export default {
  name: "LoginContent",
  // compositionApi
  setup() {
    // data
    const state = reactive({
      pass: "",
      email: "",
    });
    // Validations
    const rules = computed(() => {
      return {
        pass: { required, minLength: minLength(8) },
        email: { required, email },
      };
    });
    // use ValdateData
    const v$ = useVuelidate(rules, state);
    return {
      state,
      v$,
    };
  },
  data() {
    return {
      userNotFoundErr: "",
    };
  },

  methods: {
    SingupPage() {
      this.$router.push({ name: "SingupPage" });
    },
    async logInNow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Form Validated Successfully");
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.state.email}&pass=${this.state.pass}`
        );
        if (result.status == 200 && result.data.length > 0) {
          // this.userNotFoundErr = "User Found";
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "SingupPage" });
        } else {
          this.userNotFoundErr = "User Not Found";
        }
        // console.log(result);
      } else {
        console.log("Form Validation Faild");
      }
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
