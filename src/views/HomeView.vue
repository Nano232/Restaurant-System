<template>
  <div class="home">Home</div>
</template>

<script>
export default {
  name: "HomeView",

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SingupPage" });
    }
  },
};
</script>
