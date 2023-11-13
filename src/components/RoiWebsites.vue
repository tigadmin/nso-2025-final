<template>
  <section class="white pb-5 pt-5">
    <v-container grid-list-md text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center pt-12 pb-12" align="center">
            <div class="flex display-1 font-weight-light">
              Web Apps, A New Class Of Websites
            </div>
            <div class="flex subheading font-weight-light">
              ROI Websites® represents a new class of websites that provides an
              amazing user experience by providing an "App-Like" experience that
              works perfectly across all devices, loads in a fraction of a
              second, loads regardless of an internet connection and engages the
              user with features like save-to-mobile and push notifications.
              This new technology allows your business to scale as new
              technology is available.
            </div>
          </div>
        </v-flex>
        <v-flex md4 xs12>
          <v-card>
            <v-img alt="digital strategies" src="img/img/local-business.png">
            </v-img>
            <v-card-title>User Experience</v-card-title>
            <v-card-text grey--text text--darken-1>
              Delivers a better user experience with an "app-like" look and feel
              that engages the user and displays properly across all devices.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card>
            <v-img
              alt="Payment Solutions"
              src="img/img/mobile-app-developer.jpg"
            >
            </v-img>
            <v-card-title>User Interactions</v-card-title>
            <v-card-text grey--text text--darken-1>
              Responds quick to user interactions with no janky scrolling
              issues, allows users to save to mobile and fast loading.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card>
            <v-img alt="Mobile Apps" src="img/img/local-branding-design.jpg">
            </v-img>
            <v-card-title>User Engagement</v-card-title>
            <v-card-text grey--text text--darken-1>
              Real-time chat, push notifications, save-to-mobile, offline
              website capabilities and more.
              <!--<v-card-actions>
                              <router-link to="/localwebsitedesign/"><v-btn aria-label="local websites" flat color="teal">Local Websites</v-btn></router-link>
                            </v-card-actions>-->
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "RoiWebsites"
};
</script>

<style scoped></style>
