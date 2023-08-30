<template>
  <div class="container">
    <LoginContent />
  </div>
</template>

<script>
import LoginContent from "@/components/login/LoginContent.vue";
export default {
  name: "LoginPage",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "home" });
    }
  },
  components: {
    LoginContent,
  },
};
</script>
