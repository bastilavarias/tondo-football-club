<template>
  <v-card min-height="200" flat color="primary" class="py-3 primary" tile dark>
    <v-card-text>
      <span class="subtitle-1 font-weight-regular d-block text-center white--text">{{details.name}} - {{details.date}} - {{details.time}}</span>
      <v-row justify="center" align="center">
        <div class="vertical-center">
          <v-avatar :size="60" class="d-none d-sm-inline-block">
            <v-img :src="team.a.logo"></v-img>
          </v-avatar>
          <span class="title font-weight-bold text-uppercase white--text">{{team.a.name}}</span>
        </div>
        <span class="title font-weight-bold white--text mx-2">
              VS
            </span>
        <div class="vertical-center">
          <span class="title font-weight-bold text-uppercase white--text">{{team.b.name}}</span>
          <v-avatar :size="60" class="d-none d-sm-inline-block">
            <v-img :src="team.b.logo"></v-img>
          </v-avatar>
        </div>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center" align="center">
        <v-btn outlined color="white" class="text-capitalize">View All Matches</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
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
