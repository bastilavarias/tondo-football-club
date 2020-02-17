<template>
  <section>
    <home-landing-page></home-landing-page>
    <home-upcoming-match-schedules-and-results></home-upcoming-match-schedules-and-results>
    <generic-objectives></generic-objectives>
  </section>
</template>

<script>
    import HomeLandingPage from "../components/home/landing-page";
    import HomeUpcomingMatchSchedulesAndResults from "../components/home/upcoming-match-schedules-and-results";
    import GenericObjectives from "../components/generic-objectives";

    export default {
        name: "home",
        components: {GenericObjectives, HomeUpcomingMatchSchedulesAndResults, HomeLandingPage}
    };
</script>
