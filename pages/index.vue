<template>
  <div style="position: relative">
    <landing-page></landing-page>
    <div class="mb-5"></div>
    <featured-articles></featured-articles>
    <latest-store-items></latest-store-items>
    <about-us></about-us>
    <mission-and-vision></mission-and-vision>
    <youtube-embed youtube-id="Ee5XXUkTo9A" title="Cultural Architects Of Tondo"></youtube-embed>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
    import AboutUs from "../components/AboutUs";
    import MissionAndVision from "../components/MissionAndVision";
    import YoutubeEmbed from "../components/YoutubeEmbed";
    import LandingPage from "../components/LandingPage";
    import CustomFooter from "../layouts/partials/CustomFooter";
    import FeaturedArticles from "../components/FeaturedArticles";
    import LatestStoreItems from "../components/LatestStoreItems";

    export default {
        name: "home",
        components: {
            LatestStoreItems,
            FeaturedArticles, CustomFooter, LandingPage, YoutubeEmbed, MissionAndVision, AboutUs
        }
    };
</script>
