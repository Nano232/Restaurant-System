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
  </div>
</template>
<script>
import Navbar from "@/components/header/Navbar.vue";
import AddNewLocation from "@/components/Location/AddNewLocation.vue";
export default {
  name: "HomePage",
  data() {
    return {
      userName: "",
    };
  },
  components: {
    Navbar,
    AddNewLocation,
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LogInPage" });
    } else {
      this.$router.push({ name: "home" });
      this.userName = JSON.parse(user).name;
    }
  },
};
</script>
