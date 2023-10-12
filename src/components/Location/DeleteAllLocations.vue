<template>
  <div class="delete-all-locations">
    <Navbar />
    <form @click.prevent>
      <div class="row">
        <div class="col-auto mx-auto d-block">
          <h1>Delete All Locations</h1>
          <p class="text-danger">
            Are You Sure You Want To Delete All Locations?
          </p>
        </div>
      </div>
      <div class="row g-3 align-items-center mt-2">
        <div class="col-auto mx-auto d-block">
          <button class="btn btn-info" @click="goBack()">Cancel</button>
          &nbsp;&nbsp;&nbsp;
          <button class="btn btn-danger" @click="deleteAllLocations()">
            Delete All
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Navbar from "@/components/header/Navbar.vue";
import axios from "axios";
const sweetalert = require("sweetalert");
export default {
  name: "DeleteAllLocationsComponent",
  components: {
    Navbar,
  },
  data() {
    return {
      userId: "",
      allLocationsId: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LogInPage" });
    } else {
      this.userId = JSON.parse(user).id;
      let result = await axios.get(
        `http://localhost:3000/locations?userId=${this.userId}`
      );
      console.log(result.data.length);
      let resultLength = result.data.length;
      for (let i = 0; i < resultLength; i++) {
        this.allLocationsId.push(result.data[i].id);
      }
      console.table(this.allLocationsId);
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    async deleteAllLocations() {
      let allResults = [];
      for (let i = 0; i < this.allLocationsId.length; i++) {
        let result = await axios.delete(
          `http://localhost:3000/locations/${this.allLocationsId[i]}`
        );
        if (result.status == 200) {
          allResults.push(true);
        } else {
          allResults.push(false);
        }
      }
      console.log(allResults);
      if (!allResults.includes(false)) {
        sweetalert({
          title: "Locations Is Deleted",
          icon: "success",
        });
        setTimeout(() => {
          this.$router.push({ name: "home" });
        }, 2000);
      } else {
        sweetalert({
          title: "Delete Locations Failed",
          icon: "error",
        });
      }
    },
  },
};
</script>
