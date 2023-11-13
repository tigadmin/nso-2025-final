<template>
  <div>
    <Showmarketing />
    <showmain />
    <Cta />
    <WebsiteMarketing />
    <BotBanner />
    <Footer />
  </div>
</template>

<script>
import Showmarketing from "../components/Showmarketing";
import PerfectWebsite from "../components/PerfectWebsite";
import WebsiteMarketing from "../components/WebsiteMarketing";
import BotBanner from "../components/BotBanner";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Showmain from "../components/Showmain";

export default {
  name: "Webdesign",
  components: {
    Showmain,
    BotBanner,
    WebsiteMarketing,
    Cta,
    PerfectWebsite,
    Showmarketing,
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: "store", title: "HOME", to: "/" },
        { icon: "desktop_mac", title: "Web Design", to: "/webdesign" },
        {
          icon: "insert_chart_outlined",
          title: "POS MANAGEMENT",
          to: "/back-office"
        },
        { icon: "public", title: "YUMA ONLINE", to: "/online-ordering" },
        {
          icon: "mobile_screen_share",
          title: "MOBILE APPS",
          to: "/mobileapps"
        },
        { icon: "important_devices", title: "WEB APPS", to: "/pos-websites" },
        {
          icon: "supervised_user_circle",
          title: "RESTAURANT LABS",
          to: "/start"
        }
      ],
      contact: [
        { icon: "phone", title: "(803) 560-4913" },
        { icon: "email", title: "sales@yumapos.com" },
        { icon: "contact_support", title: "support@yumapos.com" },
        {
          icon: "library_books",
          title: "Knowledge Base",
          to: "/yumapos-support"
        },
        { icon: "supervisor_account", title: "Submit Ticket", to: "/ticket" },
        { icon: "library_books", title: "Brochure", to: "/brochure" }
      ],
      start: [
        { icon: "group_work", title: "HOW IT WORKS", to: "/marketingtools/" },
        { icon: "launch", title: "CONTACT", to: "/contact-yumapos/" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      left: true,
      leftDrawer: false,
      title: "Net Studios Inc."
    };
  }
};
</script>

<style scoped></style>
