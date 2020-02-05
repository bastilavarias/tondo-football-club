<template>
  <div style="position: relative">
    <landing-page></landing-page>
    <div class="mb-5"></div>
    <upcoming-match></upcoming-match>
    <featured-articles></featured-articles>
    <about-us></about-us>
    <mission-and-vision></mission-and-vision>
    <youtube-embed youtube-id="Ee5XXUkTo9A" title="Cultural Architects Of Tondo"></youtube-embed>
  </div>
</template>

<script>
    import AboutUs from "../components/AboutUs";
    import MissionAndVision from "../components/MissionAndVision";
    import YoutubeEmbed from "../components/YoutubeEmbed";
    import LandingPage from "../components/LandingPage";
    import FeaturedArticles from "../components/FeaturedArticles";
    import UpcomingMatch from "../components/UpcomingMatch";

    export default {
        name: "home",
        components: {
            UpcomingMatch,
            FeaturedArticles, LandingPage, YoutubeEmbed, MissionAndVision, AboutUs
        }
    };
</script>
