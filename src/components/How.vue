<template>
  <section class="white pb-5">
    <v-container grid-list-md text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center pt-12 pb-12" align="center">
            <div class="flex display-1 font-weight-light">
              Our Clients...
              <span class="text-uppercase font-weight-bold">Get Results</span>.
            </div>
            <div class="flex subheading font-weight-light">
              Throughout the past two decades, we've generated over $100 million
              in revenue for our clients.
            </div>
          </div>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Local Website Development Design"
              contain
              src="/img/img/web-designer-firm-quote.jpg"
            >
            </v-img>
            <v-card-title>DESIGN</v-card-title>
            <v-card-text class="grey--text  text--darken-2 subheading">
              We design your web app with a focus on customer conversions. Your
              web app uses the latest technology and scales as your business
              grows.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Integrated Marketing POS System"
              contain
              src="/img/img/marketing-strategy.jpg"
            >
            </v-img>
            <v-card-title>PROMOTE</v-card-title>
            <v-card-text class="grey--text  text--darken-2 subheading">
              Our marketing consultants implement your marketing strategy, build
              your marketing creatives, and launch your Local Ads&trade;
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md4 xs12>
          <v-card class="elevation-0 transparent">
            <v-img
              alt="Customer Engagement"
              contain
              src="/img/img/graphs-charts.jpg"
            >
            </v-img>
            <v-card-title>ANALYZE</v-card-title>
            <v-card-text class="grey--text  text--darken-2 subheading">
              Get detailed reports and customer analytics and keep them coming
              back with marketing automation and push notifications.
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "How"
};
</script>

<style scoped></style>
