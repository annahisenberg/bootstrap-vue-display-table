<template>
  <b-card-text class="tab-body">
    <b-alert show>
      <img src="./../assets/info.svg">
    </b-alert>
    <b-container fluid class="m-0">
      <b-row id="body">
        <b-col md="4">
          <b-form-group
            label-cols-sm="4"
            label="Member ID:"
            label-align-sm="right"
            label-for="MemberID"
          >
            <b-form-input id="MemberID" value="32102" disabled/>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label="Organization ID:"
            label-align-sm="right"
            label-for="OrganizationID"
          >
            <b-form-input id="OrganizationID" value="536" disabled/>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label="Legacy ID:"
            label-align-sm="right"
            label-for="LegacyID"
          >
            <b-form-input id="LegacyID" value="120398" disabled/>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label-cols-sm="4"
            label="First Name:"
            label-align-sm="right"
            label-for="FirstName"
          >
            <b-form-input value="Aaron" disabled id="FirstName"/>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label="Organization Name:"
            label-align-sm="right"
            label-for="OrganizationName"
          >
            <b-form-input value="MSI" disabled id="OrganizationName"/>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label="Authentication ID:"
            label-align-sm="right"
            label-for="AuthenticationID"
          >
            <b-form-input disabled id="AuthenticationID"/>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label-cols-sm="4"
            label="Last Name:"
            label-align-sm="right"
            label-for="LastName"
          >
            <b-form-input value="BAILEY" disabled id="LastName"/>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label="Organization Type:"
            label-align-sm="right"
            label-for="Type"
          >
            <b-form-input value="Servicer" disabled id="Type"/>
          </b-form-group>
          <b-form-group
            label-cols-sm="4"
            label="Member Status:"
            label-align-sm="right"
            label-for="Status"
          >
            <b-form-input value="Inactive" disabled id="Status"/>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </b-card-text>
</template>

<script>
export default {
  name: "Member"
  // data() {
  //   return {
  //     member
  //   };
  // }
};
</script>


<style scoped>
img {
  width: 1rem;
}
</style>
