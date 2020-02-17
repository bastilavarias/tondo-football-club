<template>
  <section>
    <generic-parallax title="The Supremo Futsal League" subtitle="#1 Football League in Manila"
                      :image="require('../../assets/banners/photo-of-men-playing-soccer-during-daytime-3651674.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <generic-about-us :title="content.title" :about="content.about"
                        :image="require('../../assets/logos/supremoLeague.png')"></generic-about-us>
      <v-row>
        <v-col cols="12">
          <v-card>
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
    <generic-content-holder :image="require('../../assets/backgrounds/background-red.jpg')" title="Sport Gallery"
                            :subtitle="content.about">
      <generic-gallery></generic-gallery>
    </generic-content-holder>
  </section>

</template>

<script>

    import GenericAboutUs from "../../components/generic-about-us";
    import GenericGallery from "../../components/generic-gallery";
    import GenericContentHolder from "../../components/generic-content-holder";
    import LeagueTable from "../../components/league-table";
    import MatchResult from "../../components/match-result";
    import MatchScheduleItem from "../../components/match-schedule-item";
    import MatchScheduleItemPreview from "../../components/match-schedule-item-preview";
    import GenericParallax from "../../components/generic-parallax";

    const content = {
        title: "Supremo Futsal League",
        about: "A year round football activities that will happen in different basketball courts for Futsal league and in Don Bosco Tondo football field for the football league. \n" +
            "Develop the players capability in playing and will increase the popularity of the sport within Tondo and in Manila. Targeting thousands of community members to participate."
    };

    export default {
        name: "supremo-league",
        components: {
            GenericParallax,
            MatchScheduleItemPreview,
            MatchScheduleItem, MatchResult, LeagueTable, GenericContentHolder, GenericGallery, GenericAboutUs},
        data() {
            return {
                content,
                tab: null
            };
        }
    };
</script>
