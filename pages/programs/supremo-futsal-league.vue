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
                  <supremo-league-table :team-list="getTeamList(category)"></supremo-league-table>
                </v-tab-item>
              </template>
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-card-title>Match Results</v-card-title>
            <v-tabs v-model="tab" grow>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <match-result></match-result>
                <match-result></match-result>
                <match-result></match-result>
              </v-tab-item>
            </v-tabs-items>
            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn color="primary" class="text-capitalize">See All</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card color="transparent" flat>
            <v-card-title>Upcoming Match</v-card-title>
            <v-card-text>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-title>Match Schedules</v-card-title>
            <v-tabs v-model="tab" grow>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <match-schedule-item-preview></match-schedule-item-preview>
                <match-schedule-item-preview></match-schedule-item-preview>
                <match-schedule-item-preview></match-schedule-item-preview>
                <match-schedule-item-preview></match-schedule-item-preview>
                <match-schedule-item-preview></match-schedule-item-preview>
              </v-tab-item>
            </v-tabs-items>
            <v-card-actions>
              <v-btn block text class="primary--text text-capitalize">View More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <generic-gallery title="League Gallery"
                     :background-image="require('../../assets/backgrounds/background-red.jpg')"></generic-gallery>
  </section>

</template>

<script>

    import AboutUs from "../../components/generic/generic-about-us";
    import LeagueTable from "../../components/league-table";
    import MatchResult from "../../components/match-result";
    import MatchScheduleItem from "../../components/match-schedule-item";
    import MatchScheduleItemPreview from "../../components/match-schedule-item-preview";
    import GenericParallax from "../../components/generic/generic-parallax";
    import information from "../../information";
    import SupremoLeagueTable from "../../components/supremo-league/league-table";

    export default {
        name: "supremo-league",
        components: {
            SupremoLeagueTable,
            GenericParallax,
            MatchScheduleItemPreview,
            MatchScheduleItem, MatchResult, LeagueTable, AboutUs
        },

        data() {
            return {
                tab: null,
                leagueTableTab: 0
            };
        },

        mixins: [information],

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
            },

            selectedCategory() {
                return this.categories.find((_, index) => index === this.leagueTableTab);
            }
        },

        methods: {
            getTeamList({age, gender}) {
                const list = this.team.list.filter(team => team.details.category.age === age && team.details.category.gender === gender);
                return list;
            }
        }
    };
</script>
