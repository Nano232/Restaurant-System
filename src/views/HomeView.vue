<template>
  <div class="container">
    <Navbar />
    <p class="text-end" style="font-weight: bold">
      Welcome {{ userName }}
      <router-link :to="{ name: 'ProfilePage' }">
        <button class="btn btn-info" type="button">Profile</button>
      </router-link>
    </p>
    <AddNewLocation />
    <UserLocations :allLocations="listOfLocations" />
  </div>
</template>
<script>
import Navbar from "@/components/header/Navbar.vue";
import AddNewLocation from "@/components/Location/AddNewLocation.vue";
import UserLocations from "@/components/Location/UserLocations.vue";
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      userName: "",
      listOfLocations: [],
      userId: "",
    };
  },
  components: {
    Navbar,
    AddNewLocation,
    UserLocations,
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LogInPage" });
    } else {
      this.$router.push({ name: "home" });
      this.userName = JSON.parse(user).name;
      this.userId = JSON.parse(user).id;
    }
    let result = await axios.get(
      `http://localhost:3000/locations?userId=${this.userId}`
    );
    if (result.status == 200 && result.data.length > 0) {
      console.log(result.data);
      this.listOfLocations = result.data;
    }
  },
};
</script>
