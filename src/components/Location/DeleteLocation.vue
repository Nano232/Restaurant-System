<template>
  <div class="delete-location">
    <Navbar />
    <div class="container">
      <form @click.prevent>
        <div class="row">
          <div class="col-auto mx-auto d-block">
            <h1>Delete Restaurant #{{ deleteLocation }}</h1>
            <p class="text-danger">
              Are You Sure You Want To Delete This Location?
            </p>
            {{ name }} <br />
            {{ address }} <br />
            {{ phone }} <br />
          </div>
        </div>
        <div class="row g-3 align-items-center mt-2">
          <div class="col-auto mx-auto d-block">
            <button class="btn btn-info" @click="goBack()">Cancel</button>
            &nbsp;&nbsp;&nbsp;
            <button class="btn btn-danger" @click="deleteRestaurant()">
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Navbar from "../header/Navbar.vue";
import axios from "axios";
const sweetalert = require("sweetalert");
export default {
  name: "DeleteLocationComponent",
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      userId: "",
      deleteLocation: "",
      locationData: [],
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LogInPage" });
    } else {
      this.deleteLocation = this.$route.params.locationId;
      this.userId = JSON.parse(user).id;
      this.canCurrentUser();
    }
  },
  components: {
    Navbar,
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    async canCurrentUser() {
      let result = await axios.get(
        `http://localhost:3000/locations?id=${this.deleteLocation}&userId=${this.userId}`
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
    async deleteRestaurant() {
      let result = await axios.delete(
        `http://localhost:3000/locations/${this.deleteLocation}`
      );
      if (result.status == 200) {
        sweetalert({
          title: "Location Is Deleted",
          icon: "success",
        });
        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 2000);
      } else {
        sweetalert({
          title: "Delete Restaurant Failed",
          icon: "error",
        });
      }
    },
  },
};
</script>
