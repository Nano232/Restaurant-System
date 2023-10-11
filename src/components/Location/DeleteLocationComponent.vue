<template>
  <div class="delete-location-component">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <Navbar />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="container">
            <h1>Delete Restaurant #</h1>
            <p class="text-danger">
              Are You Sure! You Want To Delete This Restaurant Location
            </p>
            {{ name }}<br />
            {{ location }}<br />
            {{ phone }}<br />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button
            class="btn btn-info"
            style="margin-right: 30px"
            @click="goBack()"
          >
            Cancle, Go Back
          </button>
          <button class="btn btn-danger">Delete Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../header/Navbar.vue";
export default {
  name: "DeleteLocationComponent",
  data() {
    return {
      name: "",
      location: "",
      phone: "",
    };
  },
  components: {
    Navbar,
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
