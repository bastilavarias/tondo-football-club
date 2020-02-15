<template>
  <section>
    <home-landing-page></home-landing-page>
    <home-upcoming-matches></home-upcoming-matches>
  </section>
</template>

<script>
    import HomeLandingPage from "../components/home/landing-page";
    import HomeUpcomingMatchTimer from "../components/home/upcoming-match-timer";
    import HomeUpcomingMatches from "../components/home/upcoming-matches";

    export default {
        name: "home",
        components: {HomeUpcomingMatches, HomeUpcomingMatchTimer, HomeLandingPage}
    };
</script>
