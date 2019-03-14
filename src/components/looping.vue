<template>
  <b-card-text class="tab-body">
    <b-container fluid class="m-0">
      <b-row id="body">
        <b-col md="4" v-bind:key="key" v-for="(value, key) in member">
          <b-form-group label-cols-sm="4" :label="key" label-align-sm="right" label-for="MemberID">
            <b-form-input id="MemberID" :value="value" disabled/>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </b-card-text>
</template>

<script>
export default {
  name: "Looping",
  data() {
    return {
      member: {
        id: 6931,
        orgnaization_id: 0,
        firstname: "MICHAEL",
        middlename: null,
        lastname: "ROOF",
        memberstatus_id: 48,
        authentication_id: "23b99ebd-1cd9-482d-ace6-548ebc7777e0",
        status: {
          id: 48,
          group_id: 9,
          caption: "Active",
          abbreviation: null,
          sort: "0",
          isactive: true
        }
      }
    };
  }
};
</script>

