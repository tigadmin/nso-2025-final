<template>
  <section class="white pt-5">
    <v-container grid-list-md light text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center ma-5 pt-5 pb-5" align="center">
            <div class="flex display-1 font-weight-light pb-3">
              NET SITES ONLINE
            </div>
            <div class="flex subheading font-weight-light">
              Give us a call at (864) 508-7140 or complete the form below to get
              started. If you have any questions or concerns please let us know.
              New customers: schedule a conference call
              <router-link to="/meeting">here</router-link>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Startnow"
};
</script>

<style scoped></style>
