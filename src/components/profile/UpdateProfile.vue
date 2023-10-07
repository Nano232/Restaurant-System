<template>
  <div class="profile">
    <div class="container">
      <Navbar />

      <form action="">
        <div class="row align-items-center" style="">
          <h1>Update Your Profile</h1>
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
            <button type="button" class="btn btn-primary" @click="upDateNow()">
              Update Profile Now
            </button>
          </div>
        </div>
        <div class="row align-items-center text-center" style="margin: 0 auto">
          <div class="col-12">
            <span>{{ updateErr }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/header/Navbar.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
const sweetalert = require("sweetalert");
import axios from "axios";
export default {
  name: "UpdateProfile",
  components: {
    Navbar,
  },
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      pass: "",
      email: "",
      userId: "",
      updateErr: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(3) },
      pass: { required, minLength: minLength(8) },
      email: { required, email },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.name = JSON.parse(user).name;
      this.email = JSON.parse(user).email;
      this.pass = JSON.parse(user).pass;
      this.userId = JSON.parse(user).id;
    } else {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    async upDateNow() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Valiated");
        let result = await axios.put(
          `https://json-server-api-one.vercel.app/users/${this.userId}`,
          {
            name: this.name,
            email: this.email,
            pass: this.pass,
          }
        );
        console.log(result);
        if (result.status == 200) {
          sweetalert({
            title: "Profile Updated Successfully",
            icon: "success",
          });
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "ProfilePage" });
        } else {
          sweetalert({
            title: "Profile Updated Fild",
            icon: "error",
          });
        }
      } else {
        this.updateErr = "Something Went Wrong, Refresh The Page";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
span {
  color: red;
  font-size: 0.85em;
}
</style>
