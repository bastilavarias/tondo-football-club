<template>
  <section>
    <generic-parallax title="Fixtures & Results"
                      :image="require('../../assets/banners/7sLeagueTeam.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" xl="2">
          <v-avatar :size="200" tile>
            <v-img :src="require('../../assets/logos/supremoLeague.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="9" xl="10">
          <generic-content-holder class="white" :title="content.title"
                                  font-type="display-1" has-separator>
            <v-container>
              <p class="subtitle-1">{{content.about}}</p>
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

    const content = {
        title: "Supremo Futsal League",
        about: "A year round football activities that will happen in different basketball courts for Futsal league and in Don Bosco Tondo football field for the football league. \n" +
            "Develop the players capability in playing and will increase the popularity of the sport within Tondo and in Manila. Targeting thousands of community members to participate."
    };

    const quickLinks = [
        {
            name: "Schedules",
            to: {name: "match-schedules-supremo-futsal-league"}
        }
    ];

    export default {
        components: {
            GenericQuickLinks,
            MatchResult, GenericContentHolder, GenericParallax, SevenSLeagueTable
        },

        data() {
            return {
                quickLinks,
                content
            }
        }
    };
</script>
