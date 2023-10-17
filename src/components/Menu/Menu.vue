<template>
  <div class="menu">
    <Navbar />
    <div class="container d-flex justify-content-between">
      <button type="button" class="btn btn-success">View/Add Category</button>
      <button type="button" class="btn btn-success">Add New Items</button>
    </div>
  </div>
</template>
<script>
import Navbar from "../header/Navbar.vue";

export default {
  name: "UserMenu",
  components: {
    Navbar,
  },
  data() {
    return {
      userId: "",
      userName: "",
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LogInPage" });
    } else {
      this.userName = JSON.parse(user).name;
      this.userId = JSON.parse(user).id;
    }
  },
};
</script>
