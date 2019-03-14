<template>
  <div>
    <b-card no-body header-bg-variant="primary" class="shadow p-3 mb-5 bg-white rounded">
      <b-tabs card class="mytabs">
        <b-tab title="Organization" active>
          <b-card-text class="tab-body">Tab Contents 1</b-card-text>
        </b-tab>
        <b-tab title="Member">
          <Member/>
        </b-tab>
      </b-tabs>
    </b-card>

    <b-card no-body header-bg-variant="primary" class="shadow p-3 mb-5 bg-white rounded">
      <b-tabs card class="mytabs">
        <b-tab title="Application Security" active>
          <ApplicationSecurity/>
        </b-tab>
        <b-tab title="Contacts" active>
          <b-card-text class="tab-body">Tab Contents 1</b-card-text>
        </b-tab>
        <b-tab title="Additional Organizations" active>
          <b-card-text class="tab-body">Tab Contents 1</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>

    <b-card no-body header-bg-variant="primary" class="shadow p-3 mb-5 bg-white rounded">
      <b-tabs card class="mytabs">
        <b-tab title="Roles" active>
          <!-- <Roles/> -->
          <Looping/>
        </b-tab>
        <b-tab title="Password Change History" active>
          <b-card-text class="tab-body">Tab Contents 1</b-card-text>
        </b-tab>
        <b-tab title="Login History" active>
          <b-card-text class="tab-body">Tab Contents 1</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Member from "./Member.vue";
import ApplicationSecurity from "./ApplicationSecurity.vue";
// import Roles from "./Roles.vue";
import Looping from "./looping";

export default {
  name: "Organization",
  components: {
    Member,
    ApplicationSecurity,
    // Roles
    Looping
  }
};
</script>

<style>
.mytabs {
  background-color: #4d9388;
}

.tab-body {
  background-color: white;
}

#body {
  padding-top: 2rem;
}

.alert-custom {
  background-color: #f3f1d0;
}

.card-body {
  padding: 0 !important;
}

input[type="text"] {
  font-size: 0.8rem;
}

button {
  font-size: 0.8rem !important;
}

li.nav-item {
  background-color: rgb(216, 210, 210);
}
</style>