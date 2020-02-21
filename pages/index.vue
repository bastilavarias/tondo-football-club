<template>
  <section>
    <home-landing-page></home-landing-page>
    <home-upcoming-match-schedules-and-results></home-upcoming-match-schedules-and-results>
    <home-recent-articles></home-recent-articles>
    <home-featured-article></home-featured-article>
    <generic-gallery :background-image="require('../assets/banners/kids.jpg')"
                     title="Featured Photos"></generic-gallery>
    <home-players></home-players>
    <generic-objectives></generic-objectives>
    <home-embeded-video></home-embeded-video>
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
    import HomeRecentArticles from "../components/home/recent-articles";
    import HomeEmbededVideo from "../components/home/embeded-video";

    export default {
        name: "home",
        components: {
            HomeEmbededVideo,
            HomeRecentArticles,
            HomePlayers,
            HomeFeaturedArticle,
            GenericAboutUs,
            GenericGallery, GenericObjectives, HomeUpcomingMatchSchedulesAndResults, HomeLandingPage
        }
    };
</script>
