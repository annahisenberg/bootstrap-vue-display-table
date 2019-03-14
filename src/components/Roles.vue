<template>
  <b-card-text class="tab-body">
    <b-alert show>
      <img src="./../assets/info.svg">
    </b-alert>
    <h3>Record Toolbar
      <b-button>Records: 0</b-button>
    </h3>
    <b-container>
      <b-row>
        <b-form-group label-cols-sm="3" label="Role:" label-align-sm="right" label-for="Role">
          <b-form-input id="Role" disabled/>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Organization ID:"
          label-align-sm="right"
          label-for="OrgID"
        >
          <b-form-input id="OrgID" disabled/>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Organization Name:"
          label-align-sm="right"
          label-for="OrgName"
        >
          <b-form-input id="OrgName" disabled/>
        </b-form-group>
        <b-form-group
          label-cols-sm="3"
          label="Organization Type:"
          label-align-sm="right"
          label-for="OrgType"
        >
          <b-form-input id="OrgType" disabled/>
        </b-form-group>
      </b-row>
    </b-container>
  </b-card-text>
</template>

<script>
export default {
  name: "Roles"
};
</script>

<style scoped>
img {
  width: 1rem;
}
</style>
