<template>
  <div class="add-new-location">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add New Restaurant
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @click="prevent">
              <div class="col-12 my-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Restaurant Name"
                  v-model="name"
                />
              </div>
              <div class="col-12 my-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                  v-model="phone"
                />
              </div>
              <div class="col-12 my-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Restaurant Address"
                  v-model="address"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Add Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddNewLocation",
  data() {
    return {
      name: "",
      address: "",
      phone: "",
    };
  },
};
</script>
