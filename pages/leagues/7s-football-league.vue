<template>
  <generic-parallax :title="banner.title" :subtitle="banner.subtitle" :image="banner.image"></generic-parallax>
</template>

<script>
    import GenericParallax from "../../components/generic/generic-parallax";
    import information from "../../information";

    export default {
        components: {GenericParallax},

        mixins: [information],

        computed: {
            sevenSFootballLeague() {
                return this.information.sevenSFootballLeague;
            },

            banner() {
                return this.sevenSFootballLeague.banner;
            }
        }
    };
</script>
