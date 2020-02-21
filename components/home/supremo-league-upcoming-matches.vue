<template>
  <v-card height="300"  color="white" tile flat>
    <v-container>
      <v-list-item>
        <v-list-item-avatar :size="75">
          <v-img :src="league.details.logo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>
            <span>Game Schedule</span>
          </v-list-item-subtitle>
          <v-list-item-title>
            <span class="title">{{league.details.name}}</span>
          </v-list-item-title>
          <v-list-item-subtitle>
          <span class="caption secondary white--text px-2 py-2">
            Venue: {{league.details.venue}}
          </span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div style="position: relative;">
        <vue-carousel :per-page="1" center-mode :paginationEnabled="false" navigationEnabled
                      :navigationClickTargetSize="0"
                      class="vue-carousel" :navigationNextLabel="navigationNextIcon"
                      :navigationPrevLabel="navigationPreviousIcon">
          <template v-for="(event, index) in league.events">
            <vue-slide :key="index">
              <p class="subtitle-2 font-weight-bold mb-0 secondary--text text-capitalize">U{{event.category.age}} {{event.category.gender}}</p>
              <template v-for="(match, index) in event.matches">
                <supremo-league-upcoming-match-item :key="index" :team-a="match.team.a" :team-b="match.team.b"
                                                    :time="match.time"></supremo-league-upcoming-match-item>
              </template>
            </vue-slide>
          </template>
        </vue-carousel>
      </div>
    </v-container>
  </v-card>
</template>

<script>
    import information from "../../information";
    import SupremoLeagueUpcomingMatchItem from "../supremo-league/upcoming-match-item";

    export default {
        name: "home-supremo-league-upcoming-matches",
        components: {SupremoLeagueUpcomingMatchItem},
        mixins: [information],

        computed: {
            league() {
                return this.information.featured.schedule.league.supremoFutsalLeague;
            },

            navigationNextIcon() {
                return `<svg class="vue-carousel-icon-small primary--text" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>`;
            },

            navigationPreviousIcon() {
                return `<svg class="vue-carousel-icon-small primary--text" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>`;
            }
        }
    };
</script>

<style lang="scss">
  .vue-carousel-icon-small {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  .VueCarousel-navigation-next {
    transform: translateY(-290%) translateX(0) !important;
  }

  .VueCarousel-navigation-prev {
    transform: translateY(-290%) translateX(1825%) !important;
  }
</style>
