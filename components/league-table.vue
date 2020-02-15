<template>
  <v-data-table hide-default-footer :headers="tableHeaders" :items="teams">
    <template v-slot:item.name="{item}">
      <span class="font-weight-bold">
        <v-avatar :size="35" class="mr-1">
          <v-img :src="require('../assets/logos/supremoLeague.png')"></v-img>
        </v-avatar>
        {{item.name}}
      </span>
    </template>
  </v-data-table>
</template>

<script>

  const tableHeaders = [
      {
          text: "Position",
          value: "position"
      },
      {
          text: "Team Name",
          value: "name"
      },
      {
          text: "Win",
          value: "wins"
      },
      {
          text: "Loss",
          value: "losses"
      },
      {
          text: "Draw",
          value: "draws"
      },
      {
          text: "Players",
          value: "players"
      }
  ];

    export default {
        name: "league-table",

        data() {
            return {
                teams: [
                    {
                        position: 1,
                        name: "Team Name",
                        wins: 10,
                        losses: 10,
                        draws: 10
                    }
                ],
                tableHeaders

            };
        }
    };
</script>
