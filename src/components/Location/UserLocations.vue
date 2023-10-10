<template>
  <div class="parent mt-3">
    <table class="table caption-top" v-if="allLocations.length > 0">
      <caption>
        List Of Locations
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
          <td>Delete | Update | View</td>
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
};
</script>
<style lang="scss" scoped></style>
