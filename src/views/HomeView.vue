<template>
  <Navbar />
  <div class="home">Home</div>
</template>

<script>
import Navbar from "@/components/header/Navbar.vue";
export default {
  name: "HomePage",
  components: {
    Navbar,
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LogInPage" });
    } else {
      this.$router.push({ name: "home" });
    }
  },
};
</script>
