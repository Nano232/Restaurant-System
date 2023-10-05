<template>
  <ul id="nav">
    <router-link :to="{ name: 'home' }"> Home </router-link>
    <a href="#" @click="logMeOut()">Logout</a>
  </ul>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    logMeOut() {
      localStorage.clear();
      this.$router.push({ name: "LogInPage" });
    },
  },
};
</script>
<style lang="scss" scoped>
$fontColor: darkcyan;
$navColor: #525a5a;
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: $fontColor;
    padding: 10px;
  }
}
a.router-link-exact-active a,
ul a a:hover {
  color: $navColor;
  box-sizing: 2px 2px 4px 0px $navColor;
}
</style>
