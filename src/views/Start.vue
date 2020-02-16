<template>
    <div>
        <startnow />
        <Startform />
    </div>
</template>

<script>
  import Startnow from "../components/Startnow";
  import Startform from "../components/Startform";

  export default {
    name: "Start",
    components: { Startform, Startnow},
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        title: 'Net Studios Inc.'
      }
    }
  };
</script>
