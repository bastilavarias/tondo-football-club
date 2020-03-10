<template>
  <section>
    <generic-parallax title="The Supremo Futsal League" subtitle="#1 Football League in Manila"
                      :image="require('../../assets/banners/photo-of-men-playing-soccer-during-daytime-3651674.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <generic-about-us :title="about.title" :message="about.message"
                        :image="about.logo"></generic-about-us>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>League Table</v-card-title>
            <v-tabs v-model="leagueTableTab" grow show-arrows>
              <template v-for="(category, index) in categories">
                <v-tab :key="index">
                  <span class="text-uppercase">U{{category.age}} {{category.gender}}</span>
                </v-tab>
              </template>
            </v-tabs>
            <v-tabs-items v-model="leagueTableTab">
              <template v-for="(category, index) in categories">
                <v-tab-item :key="index">
                  <supremo-league-table :team-list="getTeamList(category, team.list)"></supremo-league-table>
                </v-tab-item>
              </template>
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <supremo-league-upcoming-matches></supremo-league-upcoming-matches>
        </v-col>
        <v-col cols="12" md="4">
          <supremo-league-match-results></supremo-league-match-results>
        </v-col>
      </v-row>
    </v-container>
  </section>

</template>

<script>

    import GenericAboutUs from "../../components/generic/about-us";
    import LeagueTable from "../../components/league-table";
    import MatchResult from "../../components/match-result";
    import MatchScheduleItem from "../../components/match-schedule-item";
    import MatchScheduleItemPreview from "../../components/match-schedule-item-preview";
    import GenericParallax from "../../components/generic/parallax";
    import information from "../../information";
    import SupremoLeagueTable from "../../components/supremo-league/league-table";
    import GenericGallery from "../../components/generic/gallery";
    import utilities from "../../plugins/utilities";
    import SupremoLeagueUpcomingMatches from "../../components/supremo-league/upcoming-matches";
    import SupremoLeagueMatchResults from "../../components/supremo-league/match-results";

    export default {
        name: "supremo-league",
        components: {
            SupremoLeagueMatchResults,
            SupremoLeagueUpcomingMatches,
            GenericAboutUs,
            GenericGallery,
            SupremoLeagueTable,
            GenericParallax,
            MatchScheduleItemPreview,
            MatchScheduleItem, MatchResult, LeagueTable
        },

        data() {
            return {
                tab: null,
                leagueTableTab: 0
            };
        },

        head() {
            return {
                title: this.about.title,
                meta: [
                    {hid: "description", name: "description", content: this.about.message}
                ]
            };
        },

        mixins: [information, utilities],

        computed: {
            supremoFutsalLeague() {
                return this.information.supremoFutsalLeague;
            },

            about() {
                return this.supremoFutsalLeague.about;
            },

            team() {
                return this.supremoFutsalLeague.team;
            },

            categories() {
                return this.team.categories;
            }
        }
    };
</script>
