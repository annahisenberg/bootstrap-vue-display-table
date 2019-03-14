<template>
  <div>
    <b-card-text class="tab-body">
      <b-alert show>
        <img src="./../assets/info.svg">
      </b-alert>
      <b-button-group>
        <b-button>Send Password Reset Email</b-button>
        <b-button>Resend Welcome Email</b-button>
      </b-button-group>
      <b-container>
        <b-row id="body">
          <b-col>
            <b-form-group
              label-cols-sm="3"
              label="Authentication ID:"
              label-align-sm="right"
              label-for="Authentication"
            >
              <b-form-input id="Authentication" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Security Question:"
              label-align-sm="right"
              label-for="Security"
            >
              <b-form-select id="Security" v-model="selected" :options="options"/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Security Answer:"
              label-align-sm="right"
              label-for="Answer"
            >
              <b-form-input id="Answer" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Username:"
              label-align-sm="right"
              label-for="Username"
            >
              <b-form-input id="Username" disabled/>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols-sm="3"
              label="Cell Number:"
              label-align-sm="right"
              label-for="Cell"
            >
              <b-form-input id="Cell" placeholder="(___) ___-____" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Failed Logins:"
              label-align-sm="right"
              label-for="failed"
            >
              <b-form-input id="failed" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Account Locked:"
              label-align-sm="right"
              label-for="locked"
            >
              <b-form-input id="locked" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Lockout End Time:"
              label-align-sm="right"
              label-for="lockout"
            >
              <b-form-input id="lockout" disabled/>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group
              label-cols-sm="3"
              label="Date Created:"
              label-align-sm="right"
              label-for="date"
            >
              <b-form-input id="date" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Password setup date:"
              label-align-sm="right"
              label-for="setup"
            >
              <b-form-input id="setup" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Password change date:"
              label-align-sm="right"
              label-for="change"
            >
              <b-form-input id="change" disabled/>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label="Last Time Logged In:"
              label-align-sm="right"
              label-for="loggedIn"
            >
              <b-form-input id="loggedIn" disabled/>
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-card-text>
  </div>
</template>

<script>
export default {
  name: "ApplicationSecurity",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { text: "What's your mother's maiden name?" },
        { text: "What was the name of the street you grew up on?" },
        { text: "What city were you born in?" }
      ]
    };
  }
};
</script>

<style scoped>
img {
  width: 1rem;
}
</style>
