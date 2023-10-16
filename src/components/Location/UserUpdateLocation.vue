<template>
  <div class="update container">
    <Navbar />
    <h1>Update Restaurant</h1>
    <form @click.prevent>
      <div class="col-12 my-3">
        <input
          type="text"
          class="form-control"
          placeholder="Restaurant Name"
          v-model="name"
        />
        <span class="error-feedback" v-if="v$.name.$error">{{
          v$.name.$errors[0].$message
        }}</span>
      </div>
      <div class="col-12 my-3">
        <input
          type="text"
          class="form-control"
          placeholder="Phone Number"
          v-model="phone"
        />
        <span class="error-feedback" v-if="v$.phone.$error">{{
          v$.phone.$errors[0].$message
        }}</span>
      </div>
      <div class="col-12 my-3">
        <input
          type="text"
          class="form-control"
          placeholder="Restaurant Address"
          v-model="address"
        />
        <span class="error-feedback" v-if="v$.address.$error">{{
          v$.address.$errors[0].$message
        }}</span>
      </div>
    </form>
    <button type="button" class="btn btn-success" @click="UpdateLocation()">
      Update Now
    </button>
  </div>
</template>
<script>
import Navbar from "../header/Navbar.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import axios from "axios";
const sweetalert = require("sweetalert");
export default {
  name: "updateLocationComponents",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      address: "",
      locationId: "",
      phone: "",
      userId: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(10) },
      address: { required, minLength: minLength(15) },
      phone: { required, minLength: minLength(9) },
    };
  },
  components: {
    Navbar,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignupPage" });
    } else {
      this.userId = JSON.parse(user).id;
      this.locationId = this.$route.params.locationId;
      this.canCurrentUser();
    }
  },
  methods: {
    async canCurrentUser() {
      let result = await axios.get(
        `http://localhost:3000/locations?id=${this.locationId}&userId=${this.userId}`
      );
      if (result.status == 200 && result.data.length > 0) {
        this.locationData = result.data;
        this.name = this.locationData[0].name;
        this.address = this.locationData[0].address;
        this.phone = this.locationData[0].phone;
      } else {
        this.$router.push({ name: "home" });
      }
    },
    async UpdateLocation() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Validated");
        let resault = await axios.put(
          `http://localhost:3000/locations/${this.locationId}`,
          {
            name: this.name,
            address: this.address,
            phone: this.phone,
            userId: this.userId,
          }
        );
        console.log(resault);
        if (resault.status == 200) {
          sweetalert({
            title: "Restaurant Updated Successfully",
            icon: "success",
          });
          this.$router.push({ name: "home" });
        } else {
          sweetalert({
            title: "Restaurant Updated Faild",
            icon: "error",
          });
        }
      } else {
        sweetalert({
          title: "Inputs Not Validated",
          icon: "error",
        });
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
