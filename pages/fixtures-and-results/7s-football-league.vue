<template>
  <section>
    <generic-parallax title="7s Football League" subtitle="Fixtures & Results"
                      :image="require('../../assets/banners/photo-of-men-playing-soccer-during-daytime-3651674.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <generic-about-us title="About 7s League"
                        about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at beatae commodi est et eum illo incidunt laborum, nesciunt nobis, numquam pariatur possimus quaerat, quam quis rem saepe sapiente sed! Ducimus ex fugit hic, iste magni necessitatibus non odit optio quibusdam rem, repellat, saepe sapiente. Amet itaque minus mollitia tempore?"
                        :image="require('../../assets/logos/7sLeague.PNG')"></generic-about-us>
      <v-row dense>
        <v-col cols="12" md="10">
          <v-card class="mb-5">
            <v-card-title>League Table</v-card-title>
            <v-tabs v-model="tab" grow>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <league-table></league-table>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
          <v-card>
            <v-card-title>Match Results</v-card-title>
            <v-tabs v-model="tab" grow>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card-text>
                  <match-result></match-result>
                  <match-result></match-result>
                  <match-result></match-result>
                </v-card-text>
              </v-tab-item>
            </v-tabs-items>

          </v-card>
        </v-col>
        <v-col cols="12" md="2">
          <generic-quick-links :links="quickLinks"></generic-quick-links>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    import LeagueTable from "../../components/league-table";
    import GenericParallax from "../../components/generic-parallax";
    import GenericContentHolder from "../../components/generic-content-holder";
    import MatchResult from "../../components/match-result";
    import GenericQuickLinks from "../../components/generic-quick-links";
    import GenericAboutUs from "../../components/generic-about-us";

    const quickLinks = [
        {
            name: "Schedules",
            to: {name: "match-schedules-7s-football-league"}
        },
        {
            name: "Team",
            to: {name: "team"}
        }
    ];

    export default {
        components: {
            GenericAboutUs,
            GenericQuickLinks,
            MatchResult, GenericContentHolder, GenericParallax, LeagueTable
        },

        data() {
            return {
                quickLinks,
                tab: null
            };
        }
    };
</script>
