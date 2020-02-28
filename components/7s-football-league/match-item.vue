<template>
  <div id="match-item" class="py-1 px-1">
    <v-row dense>
      <v-col cols="12" md="2" align-self="center">
        <div class="text-center text-md-left">
          <span class="caption font-weight-bold d-md-block">{{date}}</span>
          <span class="caption font-weight-bold">{{time}}</span>
        </div>
      </v-col>
      <v-col cols="12" md="7" align-self="center">
        <v-row justify="center" align="center">
          <div>
            <v-avatar :size="35" v-if="teamA">
              <v-img :src="teamA.logo"></v-img>
            </v-avatar>
            <span class="subtitle-2 black--text text-uppercase">{{teamA.name}}</span>
          </div>
          <span class="caption mx-2 primary--text font-weight-bold">VS</span>
          <div>
            <span class="subtitle-2 black--text text-uppercase">{{teamB.name}}</span>
            <v-avatar :size="35" v-if="teamB">
              <v-img :src="teamB.logo"></v-img>
            </v-avatar>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" align-self="center">
        <div class="text-center">
          <v-chip label :small="screenBreakPoint.mdAndDown" :color="isWin ? 'success' : 'error'" class="mx-0 mx-md-3">{{teamA.score}} :
                                                                                                 {{teamB.score}}
          </v-chip>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
    import utilities from "../../plugins/utilities";

    export default {
        name: "seven-s-football-league-match-item",

        props: {
            date: {
                type: String,
                required: true
            },

            time: {
                type: String,
                required: true
            },

            teamA: {
                type: Object,
                required: true
            },

            teamB: {
                type: Object,
                required: true
            },

            venue: {
                type: String,
                required: true
            }
        },

        mixins: [utilities],

        computed: {
            isWin() {
                return this.teamA.score > this.teamB.score;
            }
        }

    };
</script>

<style scoped>
  #match-item {
    border-bottom: 1px solid #f2f2f2;
  }
</style>
