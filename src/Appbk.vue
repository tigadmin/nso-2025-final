<template>
  <v-app id="App">
    <v-navigation-drawer
            v-model="primaryDrawer.model"
            :floating="primaryDrawer.floating"
            :mini-variant="primaryDrawer.mini"
            :permanent="primaryDrawer.type === 'permanent'"
            :temporary="primaryDrawer.type === 'temporary'"
            :clipped="clipped"
            enable-resize-watcher
            temporary
            app
            overflow
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
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
    >
      <v-app-bar-nav-icon
              v-if="primaryDrawer.type !== 'permanent'"
              @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ><i class="material-icons">
        menu
      </i></v-app-bar-nav-icon>
      <v-toolbar-title><router-link to="/">
        <img src="@/assets/logo.png" alt="Restaurant Image" height="32" responsive>
      </router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router
               to='/'
               exact>Home</v-btn>
        <v-btn router
               to='/webdesign'
               exact>Website Design</v-btn>
        <v-btn flat router
               to='/digitalmarketing'
               exact>Digital Marketing</v-btn>
        <v-btn flat router
               to='/works'
               exact>How It Works</v-btn>
        <v-btn flat router
               to='/pricing'
               exact>Price</v-btn>
        <v-btn
                router
                to='/contact-restaurant-image'
                exact
                color="primary">GET STARTED
        </v-btn>
      </v-toolbar-items>
    
    </v-app-bar>
    
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    
    <v-footer
            :inset="footer.inset"
            app
    >
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      return {
        items: [
          { icon: 'store', title: 'HOME', to: '/' },
          { icon: 'important_devices', title: 'ADVERTISING', to: '/restaurant-marketing' },
          { icon: 'mobile_screen_share', title: 'HOW IT WORKS', to: '/online-ordering' },
          { icon: 'mobile_screen_share', title: 'PRICING', to: '/restaurant-marketing-pricing' },
          { icon: 'public', title: 'JOIN WEBINAR', to: '/restaurant-webinars' },
          { icon: 'desktop_mac', title: 'CONTACT US', to: '/contact-restaurant-image' },
          { icon: 'phone', title: '(803) 560-4913' },
  
        ],
        contact: [
          { icon: 'phone', title: '(803) 560-4913' },
          { icon: 'email', title: 'sales@yumapos.com' },
          { icon: 'contact_support', title: 'support@yumapos.com' },
          { icon: 'library_books', title: 'Knowledge Base', to: '/yumapos-support' },
          { icon: 'supervisor_account', title: 'Submit Ticket', to: '/ticket' },
          { icon: 'library_books', title: 'Brochure', to: '/brochure' },
  
        ],
      },
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        mini: false,
      },
      footer: {
        inset: false,
      },
    }),
  }
</script>
