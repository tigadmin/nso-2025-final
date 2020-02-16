<template>
    <section class="pb-5 pt-5">
        <v-container grid-list-md text-xs-center>
            <v-layout align-center column wrap>
                <v-flex xs12>
                    <router-link to="/start/start-now.html">
                        <v-btn @click.stop="dialog = !dialog" aria-label="Website Pricing" color="primary" dark round>
                            GET STARTED NOW
                        </v-btn>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "Ctad"
    }
</script>

<style scoped>

</style>
