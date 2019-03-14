<template>
  <b-card-text class="tab-body">
    <b-container fluid class="m-0">
      <b-row id="body">
        <b-col md="4" v-bind:key="key" v-for="(value, key) in member">
          <b-form-group
            label-cols-sm="4"
            :label="key | spacing | capitalize"
            label-align-sm="right"
            label-for="MemberID"
          >
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
        member_id: null,
        firstname: "",
        lastname: "",
        orgnaization_id: null,
        organization_name: "",
        organization_type: "",
        legacy_id: null,
        authentication_id: "",
        memberstatus_status: ""
      }
    };
  },
  mounted() {
    this.api();
  },

  methods: {
    api() {
      var memberData = {
        member_id: 13414,
        firstname: "Bob",
        lastname: "Smith",
        orgnaization_id: 41414,
        organization_name: "Bob",
        organization_type: "Small",
        legacy_id: 4141,
        authentication_id: "254",
        memberstatus_status: "Active"
      };
      this.member = Object.assign(memberData);
    }
  }
};
</script>

