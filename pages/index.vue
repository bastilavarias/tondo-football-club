<template>
  <main style="position: relative;">
    <section id="home-landing-page">
      <home-landing-page></home-landing-page>
    </section>
    <section id="home-match-schedules">
      <v-container>
        <v-row dense>
          <v-col cols="12" md="6" order="2" order-md="1">
            <home-supremo-upcoming-matches></home-supremo-upcoming-matches>
          </v-col>
          <v-col cols="12" md="6" order="1" order-md="2">
            <seven-s-football-league-upcoming-match></seven-s-football-league-upcoming-match>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <home-match-results></home-match-results>
    <home-recent-articles></home-recent-articles>
    <article-featured></article-featured>
    <home-players></home-players>
    <generic-holder title="Objectives">
      <v-container>
        <generic-objectives></generic-objectives>
      </v-container>
    </generic-holder>
    <home-quote></home-quote>
  </main>
</template>

<script>
    import HomeLandingPage from "../components/home/landing-page";
    import HomeFeaturedArticle from "../components/article/featured";
    import ArticleFeatured from "../components/article/featured";
    import HomePlayers from "../components/home/players";
    import HomeRecentArticles from "../components/home/recent-articles";
    import GenericObjectives from "../components/generic/objectives";
    import HomeQuote from "../components/home/quote";
    import SevenSFootballLeagueUpcomingMatch from "../components/7s-football-league/upcoming-match";
    import HomeMatchResults from "../components/home/math-results";
    import HomeSupremoUpcomingMatches from "../components/home/supremo-league-upcoming-matches";
    import GenericHolder from "../components/generic/holder";
    import utilities from "../plugins/utilities";


    export default {
        name: "home",
        components: {
            GenericHolder,
            HomeSupremoUpcomingMatches,
            HomeMatchResults,
            SevenSFootballLeagueUpcomingMatch,
            HomeQuote,
            ArticleFeatured,
            HomeRecentArticles,
            HomePlayers,
            HomeFeaturedArticle,
            GenericObjectives, HomeLandingPage
        },

        mixins: [utilities]
    };
</script>
