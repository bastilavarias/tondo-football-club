<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left">Position</th>
        <th class="text-left">
          Team Name
        </th>
        <th class="text-left">Category</th>
        <th class="text-left">Win</th>
        <th class="text-left">Loss</th>
        <th class="text-left">Draw</th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(team, index) in teams">
        <tr :key="index">
          <td>{{index + 1}}</td>
          <td>{{team.name}}</td>
          <td>{{team.category}}</td>
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
        name: "supremo-league-table",

        data() {
            return {
                teams: [
                    {
                        name: "Team Name",
                        category: "Boys",
                        wins: 10,
                        losses: 10,
                        draws: 10
                    }
                ]

            };
        }
    };
</script>
