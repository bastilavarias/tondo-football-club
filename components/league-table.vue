<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(_,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>
        <v-row align="center" justify="space-between">
          <div>
            <v-row dense align="center" justify="center">
              <div class="mr-5 text-left">
                <span class="overline grey--text d-block">POS</span>
                <span class="title">{{i + 1}}</span>
              </div>
              <div class="mr-5 text-left">
                <span class="overline grey--text d-block">Team Name</span>
                <span class="title">Parola FC</span>
              </div>
              <div class="text-left">
                <span class="overline grey--text d-block">Category</span>
                <span class="title">U18</span>
              </div>
            </v-row>
          </div>
          <div>
            <v-row dense align="center" justify="center">
              <div class="mr-5 text-left">
                <span class="overline grey--text d-block">Win</span>
                <span class="title">{{i + 1}}1</span>
              </div>
              <div class="mr-5 text-left">
                <span class="overline grey--text d-block">Loss</span>
                <span class="title">{{i + 1}}1</span>
              </div>
              <div class="text-left">
                <span class="overline grey--text d-block">Draw</span>
                <span class="title">11</span>
              </div>
            </v-row>
          </div>
          <div></div>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
    export default {
        name: "league-table"
    };
</script>
