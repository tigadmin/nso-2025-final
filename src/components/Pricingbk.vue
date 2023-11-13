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
                  ><h4>{{ item.name }}</h4></v-card-title
                >
                <v-divider></v-divider>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-content><b>Web App:</b></v-list-item-content>
                    <v-list-item-content class="align-end">{{
                      item.webapp
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Custom Design:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.custom
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Design Time:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.designtime
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Save To Mobile:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.savetomobile
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Google Maps:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.googlemaps
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Email Addresses:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.emails
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>IT Consulting:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.consulting
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Project Manager:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.manager
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content><b>Setup:</b></v-list-item-content>
                    <v-list-item-content class="align-end">{{
                      item.setup
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>AD Consulting:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.adconsult
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>AD Management:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.admgt
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Email Marketing:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.emailmarketing
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Local Citations:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.citations
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Push Notifications:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.push
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>SMS Marketing:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.sms
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content><b>Content:</b></v-list-item-content>
                    <v-list-item-content class="align-end">{{
                      item.content
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content><b>Support:</b></v-list-item-content>
                    <v-list-item-content class="align-end">{{
                      item.support
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content><b>Hosting:</b></v-list-item-content>
                    <v-list-item-content class="align-end">{{
                      item.hosting
                    }}</v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content
                      ><b>Marketing Management:</b></v-list-item-content
                    >
                    <v-list-item-content class="align-end">{{
                      item.marketing
                    }}</v-list-item-content>
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
        name: "Local Pro",
        webapp: "Included",
        custom: "Included",
        designtime: "5 Hours",
        savetomobile: "Included",
        googlemaps: "Included",
        emails: "Included (5)",
        consulting: "Included (1hr)",
        manager: "Included",
        setup: "Included",
        support: "24/7",
        marketing: "Optional",
        adconsult: "$80 per hour",
        itconsult: "$80 per hour",
        admgt: "$150 per month",
        emailmarketing: "$5 per month",
        citations: "$3 each",
        push: "$0.075 per message",
        sms: "$0.03 per text",
        hosting: "Included",
        content: "$40 per page",
        cost: "$1250 + $50 monthly"
      }
    ]
  })
};
</script>

<style scoped></style>
