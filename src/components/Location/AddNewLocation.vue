<template>
  <div class="add-new-location">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add New Restaurant
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Add A New Location
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @click="prevent">
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
                  type="number"
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
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="AddNewLocation"
            >
              Add Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import axios from "axios";
const sweetalert = require("sweetalert");
export default {
  name: "AddNewLocation",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      address: "",
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
  mounted() {
    if (!localStorage.getItem("user-info")) {
      this.$router.push({ name: "SignupPage" });
    } else {
      this.userId = JSON.parse(localStorage.getItem("user-info")).id;
    }
  },
  methods: {
    async AddNewLocation() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Validated");
        let resault = await axios.post(`http://localhost:3000/locations`, {
          name: this.name,
          address: this.address,
          phone: this.phone,
          userId: this.userId,
        });
        console.log(resault);
        if (resault.status == 201) {
          // 201 => success
          sweetalert({
            title: "Restaurant Added Location Successfully",
            icon: "success",
          });
          this.$router.push({ name: "home" });
          setTimeout(() => {
            (this.name = ""),
              (this.address = ""),
              (this.phone = ""),
              (this.v$.name.$errors[0].$message = ""),
              (this.v$.address.$errors[0].$message = ""),
              (this.v$.phone.$errors[0].$message = "");
          }, 2000);
        } else {
          sweetalert({
            title: "Restaurant Added Faild",
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
