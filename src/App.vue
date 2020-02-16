<template>
  <v-app id="App">
      <v-navigation-drawer
              v-model="primaryDrawer.model"
              :floating="primaryDrawer.floating"
              :mini-variant="primaryDrawer.mini"
              :clipped="clipped"
              temporary
              enable-resize-watcher
              app
              overflow
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            NET SITES ONLINE
          </v-list-item-title>
          <v-list-item-subtitle>
            Professional Website Design
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      
      <v-divider></v-divider>
      
      <v-list
              dense
              nav
      >
        <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
  
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar
            :clipped-left="primaryDrawer.clipped"
            app
            light
    >
      <v-app-bar-nav-icon
              v-if="primaryDrawer.type !== 'permanent'"
              @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ><i class="material-icons">
        menu
      </i></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/"><v-img src="@/assets/logov3.png" contain alt="NET Sites Online." class="" max-height="48" max-width="320" /></router-link>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn router
               to='/'
               exact>Home</v-btn>
        <v-btn router
               to='/webdesign/small-business-website-marketing.html'
               exact>Websites</v-btn>
        <v-btn flat router
               to='/digitalmarketing/local-business-digital-marketing.html'
               exact>Marketing</v-btn>
        <v-btn flat router
               to='/works/local-business-web.html'
               exact>How It Works</v-btn>
        <v-btn flat router
               to='/pricing/web-app-local-business-pricing.html'
               exact>Pricing</v-btn>
        <v-btn
                router
                to='/start/start-now.html'
                exact
                color="primary">GET STARTED
        </v-btn>
      </v-toolbar-items>
    
    </v-app-bar>
    
    <v-content>
      <v-container fluid light>
      <router-view/>
      </v-container>
    </v-content>
      <v-footer
              :inset="footer.inset"
              app
              dense
      >
          <span class="px-4">&copy; {{ new Date().getFullYear() }} NET Sites Online  <router-link to="/privacy">Privacy</router-link></span>
          <v-col cols="12" sm="12" md="6">
              <v-btn
                      absolute
                      dark
                      fab
                      top
                      right
                      @click="dialog2 = true"
                      router
                      color="green darken-1"
                      class="ma-2"
                      to='/message/'
              ><i class="material-icons">chat</i>
              </v-btn>
          </v-col>
      </v-footer>
  </v-app>
</template>

<script>
  export default {
    mounted () {
      window.scrollTo(0, 0);
    },
    data: () => ({
      items: [
        { icon: 'store', title: 'HOME', to: '/' },
        { icon: 'important_devices', title: 'WEBSITE DESIGN', to: '/webdesign/small-business-website-marketing.html' },
        { icon: 'mobile_screen_share', title: 'DIGITAL MARKETING', to: '/digitalmarketing/local-business-digital-marketing.html' },
        { icon: 'mobile_screen_share', title: 'HOW IT WORKS', to: '/works/local-business-web.html' },
        { icon: 'public', title: 'PRICING', to: '/pricing/web-app-local-business-pricing.html' },
        { icon: 'desktop_mac', title: 'CONTACT US', to: '/start/start-now.html' },
        { icon: 'group', title: 'KNOWLEDGE', to: '/marketing' },
        { icon: 'phone', title: '(803) 560-4913' },
      ],
      contact: [
        { icon: 'phone', title: '(803) 560-4913' },
        { icon: 'email', title: 'jason@netstudiosinc.com' },
        { icon: 'contact_support', title: 'support@netstudiosinc.com' },
        { icon: 'library_books', title: 'Knowledge Base', to: '/ghost' },
        { icon: 'supervisor_account', title: 'Submit Ticket', to: '/ticket' },
        { icon: 'library_books', title: 'Brochure', to: '/brochure' },
      ],
      drawers: ["Default (no property)", "Permanent", "Temporary"],
      primaryDrawer: {
        model: null,
        type: "default (no property)",
        clipped: false,
        floating: false,
        mini: false
      },
      footer: {
        inset: false
      },
      return: {
        dialog: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false
      }
    }),
  }
</script>

<style scoped>
</style>
