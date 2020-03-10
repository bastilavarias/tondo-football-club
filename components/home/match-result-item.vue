<template>
  <v-card width="300" class="ma-2" @click="toggle">
    <v-card-title>
      <div class="flex-grow-1"></div>
      <v-avatar :size="75" class="text-center d-block" tile>
        <v-img
          :src="league.logo"></v-img>
      </v-avatar>
      <div class="flex-grow-1"></div>
    </v-card-title>
    <v-card-text>
      <v-row justify="center" align="center" v-if="league.name === '7s Football League'">
        <div class="title text-center" v-if="team.a.logo">
          <v-avatar :size="75"
          >
            <v-img
              :src="team.a.logo"></v-img>
          </v-avatar>
        </div>
        <v-chip label class="mx-2 font-weight-bold">
          <span :class="`${getScoreColor(team.a.score, team.b.score)}--text`">{{team.a.score}}</span> <span class="mx-2">:</span> <span
          :class="`${getScoreColor(team.b.score, team.a.score)}--text`">{{team.b.score}}</span></v-chip>
        <div class="title text-center" v-if="team.b.logo">
          <v-avatar :size="75"
          >
            <v-img
              :src="team.b.logo"></v-img>
          </v-avatar>
        </div>
      </v-row>
      <div v-else>
        <v-row align="center">
          <v-col cols="8" class="text-left">
            <span class="title">{{team.a.name}}</span>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-chip class="font-weight-bold" label :color="getScoreColor(team.a.score, team.b.score)">{{team.a.score}}
            </v-chip>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="8" class="text-left">
            <span class="title">{{team.b.name}}</span>
          </v-col>
          <v-col cols="4" class="text-right">
            <v-chip class="font-weight-bold" label :color="getScoreColor(team.b.score, team.a.score)">{{team.b.score}}
            </v-chip>
          </v-col>
        </v-row>
      </div>
      <div class="mb-2"></div>
      <template>
        <v-row justify="center" align="center" v-if="league.name === '7s Football League'">
          <span class="subtitle-1 font-weight-bold">{{team.a.name}}</span>
          <span class="subtitle-1 font-weight-bold primary--text mx-2">VS</span>
          <span class="subtitle-1 font-weight-bold">{{team.b.name}}</span>
        </v-row>
        <div class="text-center mt-5">
          <p class="caption text-capitalize">{{category}} - {{date}}</p>
        </div>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "home-match-result-item",

        props: {
            toggle: {
                required: false
            },

            league: {
                type: Object,
                required: true
            },

            category: {
                type: String,
                required: true
            },

            date: {
                type: String,
                required: true
            },

            team: {
                type: Object,
                required: true
            }
        },

        methods: {
            getScoreColor(ownScore, opponentScore) {
                let color = "";
                if (ownScore > opponentScore) return color = "success";
                if (ownScore < opponentScore) return color = "error";
                return color;
            }
        }
    };
</script>
