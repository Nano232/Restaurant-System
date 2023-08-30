<template>
  <Navbar />
  <div class="home">Home</div>
</template>

<script>
import Navbar from "@/components/Header/NavBar.vue";
export default {
  name: "HomeView",
  components: {
    Navbar,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SingupPage" });
    }
  },
};
</script>
