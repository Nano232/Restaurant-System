<template>
  <div class="parent mt-3" style="text-align: left">
    <table class="table caption-top" v-if="allLocations.length > 0">
      <caption style="font-weight: bold">
        List Of Locations:
        {{
          allLocations.length
        }}
      </caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Address</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(loc, i) in allLocations" :key="i">
          <td>{{ loc.name }}</td>
          <td>{{ loc.phone }}</td>
          <td>{{ loc.address }}</td>
          <td>
            <router-link
              :to="{ name: 'DeleteLocation', params: { locationId: loc.id } }"
            >
              <button class="btn btn-danger">Delete</button>
            </router-link>
            <!-- <button class="btn btn-danger" @click="DeleteLocationPage()">
              Delete
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="alert alert-warning" role="alert">
      No Locations Added Yet
    </div>
  </div>
</template>
<script>
export default {
  name: "UserLocations",
  props: ["allLocations"],
  methods: {
    DeleteLocationPage() {
      this.$router.push({ name: "DeleteLocation" });
    },
  },
};
</script>
<style lang="scss" scoped></style>
