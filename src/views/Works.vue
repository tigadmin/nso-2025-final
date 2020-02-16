<template>
    <div>
        <How2 />
        <Cta />
        <BotBanner />
        <footer />
    </div>
</template>

<script>
    import How2 from "../components/How2";
    import BotBanner from "../components/BotBanner";
    import Footer from "../components/Footer";
    import Cta from "../components/Cta";

    export default {
        name: "Works",
        components: {How2, BotBanner, Cta, Footer},
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


<style scoped>

</style>
