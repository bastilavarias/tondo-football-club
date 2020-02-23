<template>
  <section>
    <home-landing-page></home-landing-page>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <home-supremo-upcoming-matches></home-supremo-upcoming-matches>
        </v-col>
        <v-col cols="12" md="6">
          <seven-s-football-league-upcoming-match></seven-s-football-league-upcoming-match>
        </v-col>
      </v-row>
    </v-container>
    <home-match-results></home-match-results>
    <home-recent-articles></home-recent-articles>
    <article-featured></article-featured>
    <home-players></home-players>
    <generic-objectives></generic-objectives>
    <home-quote></home-quote>
  </section>
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


    export default {
        name: "home",
        components: {
            HomeSupremoUpcomingMatches,
            HomeMatchResults,
            SevenSFootballLeagueUpcomingMatch,
            HomeQuote,
            ArticleFeatured,
            HomeRecentArticles,
            HomePlayers,
            HomeFeaturedArticle,
            GenericObjectives, HomeLandingPage
        }
    };
</script>
