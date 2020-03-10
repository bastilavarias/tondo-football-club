<template>
  <main style="position: relative;">
    <section id="home-landing-page">
      <home-landing-page></home-landing-page>
    </section>
    <section id="home-match-schedules">
      <generic-holder title="Schedules & Results">
        <v-container>
          <v-row dense>
            <v-col cols="12" md="6" order="2" order-md="1">
              <seven-s-football-league-upcoming-match></seven-s-football-league-upcoming-match>
            </v-col>
            <v-col cols="12" md="6" order="1" order-md="2">
              <home-supremo-upcoming-matches></home-supremo-upcoming-matches>
            </v-col>
            <v-col cols="12" order="3">
              <home-match-results></home-match-results>
            </v-col>
          </v-row>
        </v-container>
      </generic-holder>
    </section>
    <v-container>
      <generic-holder title="Nosi Balasi">
        <home-recent-articles></home-recent-articles>
        <article-featured></article-featured>
      </generic-holder>
      <generic-holder title="Team">
        <home-players></home-players>
      </generic-holder>
      <generic-holder title="Sponsors">
        <generic-sponsors></generic-sponsors>
      </generic-holder>
    </v-container>
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
    import HomeMatchResults from "../components/home/match-results";
    import HomeSupremoUpcomingMatches from "../components/home/supremo-league-upcoming-matches";
    import GenericHolder from "../components/generic/holder";
    import utilities from "../plugins/utilities";
    import SevenSFootballLeagueUpcomingMatch from "../components/7s-football-league/upcoming-match";
    import GenericSponsors from "../components/generic/sponsors";


    export default {
        name: "home",
        components: {
            GenericSponsors,
            SevenSFootballLeagueUpcomingMatch,
            GenericHolder,
            HomeSupremoUpcomingMatches,
            HomeMatchResults,
            HomeQuote,
            ArticleFeatured,
            HomeRecentArticles,
            HomePlayers,
            HomeFeaturedArticle,
            GenericObjectives, HomeLandingPage
        },

        mixins: [utilities],

        head() {
            return {
                title: "Tondo Football Club"
            }
        }
    };
</script>
