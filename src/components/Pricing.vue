<template>
  <section class="white pb-5 pt-5">
    <v-container>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :footer-props="{ itemsPerPageOptions }"
      >
        <template v-slot:default="props">
          <v-row>
            <v-col v-for="item in props.items" :key="item.name">
              <v-card>
                <v-card-title
                  >{{ item.name }}&trade; {{ item.type }}</v-card-title
                >
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Managed Marketing Platform:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.plat
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >WebApp Design:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.app
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Marketing Plan:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.mp
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Local Connect&trade;:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.lc
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Local Ads&trade;:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.la
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Local Listings&trade;:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.ll
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Save To Mobile:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.save
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Google Maps:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.maps
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Email Addresses:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.emails
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >IT Consulting:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.it
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Dedicated Manager:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.pm
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >AD Consulting:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.avail
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >AD Management:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.avail
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Paid Local Search:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.pls
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Paid Social:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.ps
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Email Marketing:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.em
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Push Notifications:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.pn
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >SMS Marketing:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.sms
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Copywriting:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.content
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Website Hosting:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.hosting
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Marketing Management:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.marketing
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Minimum Ad Spend:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.mas
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >Cost :</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.setup
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      >24/7 Lifetime Support:</v-list-item-content
                    >
                    <v-list-tile-content class="align-end">{{
                      item.support
                    }}</v-list-tile-content>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-card-title
                    ><v-btn
                      @click.stop="dialog = !dialog"
                      aria-label="Website Pricing"
                      color="light-blue darken-4"
                      dark
                      round
                      >{{ item.cost }}</v-btn
                    >
                  </v-card-title>
                  <v-list-item>
                    <v-list-item-content class="grey--text  text--darken-2 "
                      ><i>{{ item.up }}</i></v-list-item-content
                    >
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Pricing",
  data: () => ({
    itemsPerPageOptions: [3],
    itemsPerPage: 3,
    items: [
      {
        value: true,
        name: "Local Connect",
        type: "Pro",
        plat: "Yes",
        app: "Yes",
        mp: "Yes",
        lc: "No",
        la: "No",
        ll: "No",
        save: "Yes",
        maps: "Yes",
        call: "Call Us",
        avail: "Available",
        emails: "$2 Each",
        it: "Yes",
        pm: "Yes",
        pn: "Yes",
        em: "Yes",
        pls: "Available",
        ps: "Available",
        setup: "$1495",
        push: "Yes",
        sms: "$0.0075 per/message",
        hosting: "Yes",
        adconsult: "$499 (optional)",
        admgt: "$125 per hour",
        emailmarketing: "Yes",
        content: "$50 per page",
        support: "Yes",
        marketing: "Available",
        mas: "$0",
        cost: "$795 deposit & $49 per month",
        adspend: "N/A",
        up: '*Upgrade to "advanced" anytime'
      },
      {
        value: true,
        name: "Local Connect",
        type: "Advanced",
        plat: "Yes",
        app: "Yes",
        mp: "Yes",
        lc: "Yes",
        la: "Yes",
        ll: "Yes",
        save: "Yes",
        maps: "Yes",
        call: "Call Us",
        avail: "Available",
        emails: "$2 Each",
        it: "Yes",
        pm: "Yes",
        pn: "Yes",
        em: "Yes",
        pls: "Yes",
        ps: "Yes",
        setup: "$1895",
        push: "Yes",
        sms: "$0.0075 per/message",
        hosting: "Yes",
        adconsult: "$499 (optional)",
        admgt: "$125 per hour",
        emailmarketing: "Yes",
        content: "$50 per page",
        support: "24/7",
        marketing: "Yes",
        mas: "$0",
        cost: "$795 deposit & $279 per month",
        adspend: "$0",
        up: "* Ad spend not included"
      },
      {
        value: true,
        name: "Local Connect",
        type: "Franchise",
        plat: "Yes",
        app: "Yes",
        mp: "Yes",
        lc: "Yes",
        la: "Yes",
        ll: "Yes",
        save: "Yes",
        maps: "Yes",
        call: "Call Us",
        avail: "Available",
        emails: "$2 Each",
        it: "Yes",
        pm: "Yes",
        pn: "Yes",
        em: "Yes",
        pls: "Yes",
        ps: "Yes",
        setup: "$995",
        push: "Yes",
        sms: "$0.0075 per/message",
        hosting: "Yes",
        adconsult: "$499 (optional)",
        admgt: "$125 per hour",
        emailmarketing: "Yes",
        content: "$50 per page",
        support: "24/7",
        marketing: "Yes",
        mas: "$0",
        cost: "Call For Pricing",
        adspend: "$0"
      }
    ]
  })
};
</script>

<style scoped></style>
