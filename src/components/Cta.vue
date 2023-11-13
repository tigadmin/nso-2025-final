<template>
  <section class="white pb-5 pt-5">
    <v-container grid-list-md text-xs-center>
      <v-layout align-center column wrap>
        <v-flex xs12>
          <router-link to="/start/start-now.html">
            <v-btn
              @click.stop="dialog = !dialog"
              aria-label="Website Pricing"
              color="primary"
              dark
              round
            >
              GET YOUR FREE QUOTE
            </v-btn>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Cta"
};
</script>

<style scoped></style>
