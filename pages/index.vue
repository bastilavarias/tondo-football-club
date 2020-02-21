<template>
  <section>
    <home-landing-page></home-landing-page>
    <home-upcoming-match-schedules-and-results></home-upcoming-match-schedules-and-results>
    <home-recent-articles></home-recent-articles>
    <article-featured></article-featured>
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
    import HomeFeaturedArticle from "../components/article/featured";
    import ArticleFeatured from "../components/article/featured";
    import HomePlayers from "../components/home/players";
    import HomeRecentArticles from "../components/home/recent-articles";
    import HomeEmbededVideo from "../components/home/embeded-video";


    export default {
        name: "home",
        components: {
            ArticleFeatured,
            HomeEmbededVideo,
            HomeRecentArticles,
            HomePlayers,
            HomeFeaturedArticle,
            GenericAboutUs,
            GenericGallery, GenericObjectives, HomeUpcomingMatchSchedulesAndResults, HomeLandingPage
        }
    };
</script>
