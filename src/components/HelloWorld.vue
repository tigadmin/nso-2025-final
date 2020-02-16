<template>
    <v-parallax dark src="@/assets/home6.jpg" contain cover height="720">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-2 pb-5 font-weight-thin">
                    Performance Driven Digital Marketing Agency
                </h1>
                <h4 class="headline pb-5">
                    Website Design & Marketing Services For Local Business
                </h4>
                <router-link to="/meeting">
                    <v-btn
                            @click.stop="dialog = !dialog"
                            aria-label="Website Pricing"
                            color="light-blue darken-4"
                            dark
                            class="ma-2"
                            round
                    >
                        GET MY FREE PROPOSAL
                    </v-btn>
                </router-link>
                <div class="mt-2">
                    <img
                            alt="Restaurant POS Review"
                            height="20"
                            responsive
                            src="img/top-local-marketing.png"
                    />
                </div>
                
                <p class="font-weight-regular text--grey darken-1">
                    24/7 Support | (864) 214-4150
                </p>
            </v-col>
        </v-row>
    </v-parallax>
</template>
<style scoped>
</style>
