<template>
  <section>
    <generic-parallax title="Fixtures & Results"
                      :image="require('../../assets/banners/7sLeagueTeam.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" xl="2">
          <v-avatar :size="200" tile>
            <v-img :src="require('../../assets/logos/7sLeague.PNG')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="9" xl="10">
          <generic-content-holder class="white" title="About 7s League"
                                  font-type="display-1" has-separator>
            <v-container>
              <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at beatae commodi
                                    est et eum illo incidunt laborum, nesciunt nobis, numquam pariatur possimus quaerat,
                                    quam quis rem saepe sapiente sed! Ducimus ex fugit hic, iste magni necessitatibus
                                    non odit optio quibusdam rem, repellat, saepe sapiente. Amet itaque minus mollitia
                                    tempore?</p>
            </v-container>
          </generic-content-holder>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" md="10">
          <v-card class="mb-5">
            <v-card-title>League Table</v-card-title>
            <seven-s-league-table></seven-s-league-table>
          </v-card>
          <v-card>
            <v-card-title>Match Results</v-card-title>
            <v-card-text>
              <match-result></match-result>
            </v-card-text>
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
    import SevenSLeagueTable from "../../components/7s-league-table";
    import GenericParallax from "../../components/generic-parallax";
    import GenericContentHolder from "../../components/generic-content-holder";
    import MatchResult from "../../components/match-result";
    import GenericQuickLinks from "../../components/generic-quick-links";

    const quickLinks = [
        {
            name: "Schedules",
            to: {name: "match-schedules-7s-football-league"}
        }
    ];

    export default {
        components: {
            GenericQuickLinks,
            MatchResult, GenericContentHolder, GenericParallax, SevenSLeagueTable
        },

        data() {
            return {
                quickLinks
            }
        }
    };
</script>
