<template>
  <div class="text-center py-3">
    <v-container>
      <span class="subtitle-1 font-weight-regular d-block white--text">{{details.name}} - {{details.date}} - {{details.time}}</span>
      <v-row justify="center" align="center">
        <div>
          <span class="display-1 font-weight-bold text-uppercase white--text">{{team.a.name}}</span>
          <v-avatar :size="75" class="d-none d-md-inline-block">
            <v-img :src="team.a.logo"></v-img>
          </v-avatar>
        </div>
        <span class="display-1 font-weight-bold white--text mx-2">
          VS
        </span>
        <div>
          <v-avatar :size="75" class="d-none d-md-inline-block">
            <v-img :src="team.b.logo"></v-img>
          </v-avatar>
          <span class="display-1 font-weight-bold text-uppercase white--text">{{team.b.name}}</span>
        </div>
      </v-row>
      <v-btn class="white--text text-capitalize mt-5" outlined>See more</v-btn>
    </v-container>
  </div>
</template>

<script>

    export default {
        name: "home-seven-s-league-upcoming-match-item",

        props: {
            details: {
                type: Object,
                required: true
            },

            team: {
                type: Object,
                required: true
            }
        }
    };
</script>
