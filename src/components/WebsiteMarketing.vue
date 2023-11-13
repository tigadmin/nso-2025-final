<template>
  <section class="pb-5 pt-5">
    <v-container grid-list-md text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center pt-12 pb-12" align="center">
            <div class="flex display-1 font-weight-light">
              Integrated Marketing Tools
            </div>
            <div class="flex subheading font-weight-light">
              Customer engagement tools serve as the link that connects the
              digital realm with the physical world.
            </div>
          </div>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Local Website Development Design"
              contain
              src="/img/img/push-notifications-local.jpg"
            >
            </v-img>
            <v-card-title>Push Notifications</v-card-title>
            <v-card-text class="grey--text  text--darken-2 subheading">
              Dispatch push notifications to site visitors, customers, or anyone
              who explores your website.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Local Business SMS Messaging"
              contain
              src="/img/img/sms-messaging.jpg"
            >
            </v-img>
            <v-card-title>SMS Messaging</v-card-title>
            <v-card-text class="grey--text  text--darken-2 subheading">
              Maintain a connection with your customers through text messaging
              while actively engaging your website visitors.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Customer Engagement"
              contain
              src="/img/img/social-media-local-business.jpg"
            >
            </v-img>
            <v-card-title>Artificial Intelligence (AI)</v-card-title>
            <v-card-text class="grey--text  text--darken-2 subheading">
              Utilize AI to offer a unique user experience, as AI pertains to
              the intelligence displayed by machines or software.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "WebsiteMarketing"
};
</script>

<style scoped></style>
