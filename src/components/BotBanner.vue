<template>
  <section class="pb-5">
    <v-parallax
      alt="Local Business Digital Marketing & Design"
      cover
      contain
      src="/img/img/local-business-website-design.jpg"
    >
      <v-layout align-center column justify-center>
        <h1 class="text-center display-2 font-weight-thin text-xs-center pt-2">
          Let's Get Started
        </h1>
        <h3 class="headline mb-3 text-xs-center pb-2 pt-1 text-center">
          Schedule your consultation and see what we can do for your business.
        </h3>
        <router-link to="/start/start-now.html">
          <v-btn
            @click.stop="dialog = !dialog"
            aria-label="Website Pricing"
            color="light-blue darken-4"
            dark
            class="ma-2"
            round
          >
            SCHEDULE MY FREE CONSULTATION
          </v-btn>
        </router-link>
        <div class="mt-2">
          <img
            alt="Net Sites Online"
            responsive
            src="https://www.netstudiosinc.com/img/top-local-marketing.png"
          />
        </div>

        <p class="subheading font-weight-regular mt-2 cologrey lighten-2">
          (864) 508-7140
        </p>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "BotBanner"
};
</script>

<style scoped></style>
