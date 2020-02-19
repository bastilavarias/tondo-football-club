  <template>
  <section>
    <home-landing-page></home-landing-page>
    <home-upcoming-match-schedules-and-results></home-upcoming-match-schedules-and-results>
    <generic-objectives title="Objectives"></generic-objectives>
    <home-featured-article></home-featured-article>
    <generic-content-holder :image="require('../assets/banners/kids.jpg')" title="Featured Photos">
      <generic-gallery></generic-gallery>
    </generic-content-holder>
  </section>
</template>

<script>
    import HomeLandingPage from "../components/home/landing-page";
    import HomeUpcomingMatchSchedulesAndResults from "../components/home/upcoming-match-schedules-and-results";
    import GenericObjectives from "../components/generic-objectives";
    import GenericGallery from "../components/generic-gallery";
    import GenericAboutUs from "../components/generic-about-us";
    import GenericContentHolder from "../components/generic-content-holder";
    import HomeFeaturedArticle from "../components/home/featured-aticle";

    export default {
        name: "home",
        components: {
            HomeFeaturedArticle,
            GenericContentHolder,
            GenericAboutUs,
            GenericGallery, GenericObjectives, HomeUpcomingMatchSchedulesAndResults, HomeLandingPage
        }
    };
</script>
