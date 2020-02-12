<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">Position</th>
        <th class="text-left">
          Team Name
        </th>
        <th class="text-left">Win</th>
        <th class="text-left">Loss</th>
        <th class="text-left">Draw</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(team, index) in teams">
        <tr :key="index">
          <td><span>{{index + 1}}</span></td>
          <td>
            <v-avatar :size="35">
              <v-img :src="require('../assets/logos/supremoLeague.png')"></v-img>
            </v-avatar>
            <span class="font-weight-bold">{{team.name}}</span>
          </td>
          <td>{{team.wins}}</td>
          <td>{{team.losses}}</td>
          <td>{{team.draws}}</td>
        </tr>
      </template>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
    export default {
        name: "seven-s-league-table",

        data() {
            return {
                teams: [
                    {
                        name: "Team Name",
                        wins: 10,
                        losses: 10,
                        draws: 10
                    }
                ]

            };
        }
    };
</script>
