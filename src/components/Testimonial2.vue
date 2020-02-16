<template>
    <section class="white">
    <v-parallax alt="Local Business Websites" cover height="720" max-width="1900" src="/img/img/justin-ludy-palmetto-wildlife-extractors.jpg">
        <v-layout
                align-center
                column
                justify-center
        >
            <h1 class="text-xs-center display-2 font-weight-thin">Our Customers Are Saying ...</h1>
            <div class="text-xs-center">
                <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center white--text">
                        Justin Ludy, founder of Palmetto Wildlife | Columbia, South Carolina
                    </div>
                </v-card-title>
                <v-card-text class="grey--text  text--lighten-2 subheading"><i>
                    “Net Studios provided SEO services and SEO content solutions for us. Jason provided a great deal of knowledge concerning web marketing. I appreciate the help I recieved when launching my brand”
                </i>
                </v-card-text>
            </div>
            <router-link to='/start/start-now.html'>
                <v-btn @click.stop="dialog = !dialog" aria-label="Website Pricing" color="light-blue darken-4" dark round>
                    GET YOUR FREE QUOTE
                </v-btn>
            </router-link>
        </v-layout>
    </v-parallax>
    </section>
</template>

<script>
    export default {
        name: "Testimonial2"
    }
</script>

<style scoped>

</style>
