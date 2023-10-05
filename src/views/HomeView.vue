<template>
  <div class="home">Home</div>
</template>

<script>
export default {
  name: "HomePage",

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
