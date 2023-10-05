<template>
  <div class="profile">
    <div class="container">
      <Navbar />

      <form action="">
        <div class="row align-items-center" style="">
          <h1>Update Your Profile</h1>
          <div class="col-12 m-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
              v-model="name"
            />
          </div>
          <div class="col-12 m-3">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
              v-model="email"
            />
          </div>
          <div class="col-12 m-3">
            <input
              type="password"
              class="form-control"
              placeholder="Enter Your Password"
              v-model="pass"
            />
          </div>
          <div class="col-12 m-3">
            <button type="button" class="btn btn-primary">
              Update Profile Now
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/header/Navbar.vue";
export default {
  name: "UpdateProfile",
  components: {
    Navbar,
  },
  data() {
    return {
      name: "",
      email: "",
      pass: "",
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.name = JSON.parse(user).name;
      this.email = JSON.parse(user).email;
      this.pass = JSON.parse(user).pass;
    }
  },
};
</script>
