<template>
    <section class="white pb-5 pt-5">
        <v-container grid-list-md text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <div class="text-xs-center pt-12 pb-12" align="center">
                        <div class="flex display-1 font-weight-light">WebApp Samples</div>
                        <div class="flex subheading font-weight-light">
                            Successful websites may look simple, what you don't see is an underlying formula behind the scenes that positions the proper elements in the correct place. We design your website using this formula.
                        </div>
                    </div>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-3">
                        <v-img alt="Customer Engagement" contain src="/img/img/yumapos-small.jpg">
                        </v-img>
                        <v-card-text class="grey--text  text--darken-2 subheading">Yumapos</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-3">
                        <v-img alt="Local Website Development Design" contain src="/img/img/restaurantimage-small.jpg">
                        </v-img>
                        <v-card-text class="grey--text  text--darken-2 subheading">Restaurant Image</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-3">
                        <v-img alt="Integrated Marketing POS System" contain src="/img/img/briosopasta-small.jpg">
                        </v-img>
                        <v-card-text class="grey--text  text--darken-2 subheading">Brioso Pasta</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12>
                    <div class="text-xs-center pt-12 pb-12" align="center">
                        <div class="flex font-weight-light">
                            <i>“The launch of this new PWA marks the culmination of a year-long organizational transformation Forbes has undergone to become a product-driven company. We’ve been able to quickly iterate on this new product to gather input and alignment from all stakeholders – readers, journalists, and advertisers,” said Zalatimo. .... a 20% increase in the number of impressions, a 12% increase in the number of users, and 6x increase in the number of readers completing articles."
                            </i>
                        </div>
                        <div>Source: <a href="https://www.forbes.com/sites/forbespr/2017/03/07/forbes-launches-all-new-mobile-web-experience-for-forbes-com/#bb04a4d5168d">Forbes new mobile experience was developed as a Progressive Web App (PWA)</a> | <a href="https://www.pwastats.com/">PWA Stats</a>
                        </div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>
<script>
    export default {
        name: "Sample",

        data: () => ({
            items: [
                {
                    src: 'backgrounds/x2pos-2.jpg',
                },
                {
                    src: 'backgrounds/brioso-2.jpg',
                },
                {
                    src: 'backgrounds/yumapos-2.jpg',
                },
            ],
            selected: [],
        }),
    }
</script>

<style scoped>

</style>
