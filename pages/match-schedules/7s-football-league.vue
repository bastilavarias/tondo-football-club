<template>
  <section>
    <generic-parallax title="7s Football League" subtitle="Match Schedules"
                      :image="require('../../assets/banners/photo-of-men-playing-soccer-during-daytime-3651674.jpg')"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="10">
          <v-card class="mb-5" color="transparent" flat>
            <v-card-title>Upcoming Match</v-card-title>
            <v-card-text>
              <match-schedule-item></match-schedule-item>
              <match-schedule-item></match-schedule-item>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>Match Schedules</v-card-title>
            <v-tabs v-model="tab" grow>
              <v-tab>U10</v-tab>
              <v-tab>U13</v-tab>
              <v-tab>U17</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="6">
                      <p class="subtitle-2">Boys</p>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                    </v-col>
                    <v-col cols="12" md="6">
                      <p class="subtitle-2">Girls</p>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                      <match-schedule-item-preview></match-schedule-item-preview>
                    </v-col>
                  </v-row>
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
    import GenericParallax from "../../components/generic-parallax";
    import GenericContentHolder from "../../components/generic-content-holder";
    import GenericQuickLinks from "../../components/generic-quick-links";
    import MatchScheduleItem from "../../components/match-schedule-item";
    import MatchScheduleItemPreview from "../../components/match-schedule-item-preview";

    const quickLinks = [
        {
            name: "Fixtures & Results",
            to: {name: "fixtures-and-results-7s-football-league"}
        },
        {
            name: "Team",
            to: {name: "team"}
        }
    ];

    export default {
        components: {
            MatchScheduleItemPreview,
            MatchScheduleItem, GenericQuickLinks, GenericContentHolder, GenericParallax},

        data() {
            return {
                quickLinks,
                tab: null
            }
        }
    };
</script>
