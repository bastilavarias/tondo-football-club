<template>
  <section>
    <home-landing-page></home-landing-page>
    <home-upcoming-match-schedules-and-results></home-upcoming-match-schedules-and-results>
    <generic-objectives></generic-objectives>
    <home-featured-article></home-featured-article>
    <generic-gallery :background-image="require('../assets/banners/kids.jpg')"
                     title="Featured Photos"></generic-gallery>
    <home-players></home-players>
  </section>
</template>

<script>
    import HomeLandingPage from "../components/home/landing-page";
    import HomeUpcomingMatchSchedulesAndResults from "../components/home/upcoming-match-schedules-and-results";
    import GenericObjectives from "../components/generic-objectives";
    import GenericGallery from "../components/generic-gallery";
    import GenericAboutUs from "../components/generic-about-us";
    import HomeFeaturedArticle from "../components/home/featured-aticle";
    import HomePlayers from "../components/home/players";

    export default {
        name: "home",
        components: {
            HomePlayers,
            HomeFeaturedArticle,
            GenericAboutUs,
            GenericGallery, GenericObjectives, HomeUpcomingMatchSchedulesAndResults, HomeLandingPage
        }
    };
</script>
