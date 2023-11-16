<template>
  <div>
    <startnow />
    <Startform />
  </div>
</template>

<script>
import Startnow from "../components/Startnow";
import Startform from "../components/Startform";
import Startpipe from "../components/Startpipe";

export default {
  name: "Start",
  components: { Startpipe, Startform, Startnow },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title:
        "Net Sites Online | Performance Based Web Design Marketing Agency : Contact Us"
    };
  }
};
</script>
