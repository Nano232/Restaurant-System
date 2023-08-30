<template>
  <div class="nav-bar">
    <ul>
      <router-link
        :to="{ name: 'home', params: { pageTitle: 'Home Page' } }"
        exact
      >
        <a href="">Home</a>
      </router-link>
      <a href="#" @click="logMeOut()"> Log Out</a>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    logMeOut() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>
<style scoped lang="scss">
$fontColor: darkcyan;
$navCOlor: #525a5a;
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    font-weight: bold;
    color: $fontColor;
    padding: 10px;
  }
  a.router-link-exact-active a,
  ul a a:hover {
    color: $navCOlor;
    box-shadow: 2px 2px 4px 0 $navCOlor;
  }
}
</style>
