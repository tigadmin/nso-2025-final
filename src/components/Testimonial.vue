<template>
  <section class="white pb-5 pt-5">
    <v-container grid-list-md text-xs-center>
      <v-layout align-center row wrap>
        <v-flex xs12>
          <div class="text-xs-center pa-5" align="center">
            <div class="flex display-1 font-weight-light">
              Our Clients...
              <span class="text-uppercase font-weight-bold">Get Results</span>.
            </div>
            <div class="flex subheading font-weight-light">
              Over the last 20 years, we have generated over 100 million in
              revenue for our clients including some of the most well respected
              INC 5000 brands.
            </div>
            <v-img
              alt="Local Website Development Design"
              contain
              src="/img/img/local-business.png"
            >
            </v-img>
            <a
              href="https://www.amazon.com/Zero-100-Building-Fitness-Locations/dp/149176547X"
              >Source:
              https://www.amazon.com/Zero-100-Building-Fitness-Locations/dp/149176547X
            </a>
          </div>
        </v-flex>

        <v-card class="elevation-0 transparent">
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-xs-center">
              Shannon Hudson, founder of 9Round Fitness | Greenville, South
              Carolina
            </div>
          </v-card-title>
          <v-card-text class="grey--text  text--darken-2 subheading">
            “The second person who comes to mind is my IT guy, Jason Bishop. He
            developed our very first crappy one-page website back in 2008. Hey,
            that’s all I could afford at the time. Today our website has
            literally thousands of pages and is very complex. In fact, a website
            is a live being that always has to be tended to. Jason is in charge
            of our web developers, SEO (search engine optimization), PPC (pay
            per click) and SEM team (search engine optimization team). There is
            always work to do with a growing business. A strong brand has to
            stay on top of these web developments and Jason is always on it. He
            works from the office and from home and most weeks I wouldn’t be
            surprised if he puts in sixty hours a week. When there is a major
            website change, he will pull an all-nighter because that is when the
            least amount of traffic is on the site. He’s an incredibly smart guy
            and has a work ethic that rivals mine. He has been a huge asset to
            Heather, myself and the entire 9Round organization.”
          </v-card-text>
          <div class="text-xs-center pa-5" align="center">
            <v-img
              alt="Local Search Ads"
              max-width="180"
              cover
              contain
              src="img/img/9round.png"
            >
            </v-img>
          </div>
        </v-card>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  data: () => ({
    show: false
  })
};
</script>

<style scoped></style>
