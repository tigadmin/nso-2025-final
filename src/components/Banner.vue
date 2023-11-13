<template>
  <v-parallax
    alt="Client Web Design Logos"
    height="360"
    top
    src="/img/restaurant/restaurant-web-design-caveman2.jpg"
  >
    <v-layout align-center column justify-center>
      <h1 class="text-xs-center display-2 font-weight-thin">
        Performance Based Web Services
      </h1>
      <div class="headline mb-3 text-xs-center">
        100% Commission Free | No Management Fees | No Contracts
      </div>
      <router-link to="/restaurant-marketing">
        <v-btn
          @click.stop="dialog = !dialog"
          aria-label="Website Pricing"
          color="light-blue darken-4"
          dark
          round
        >
          POST YOUR PROJECT
        </v-btn>
      </router-link>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped></style>
