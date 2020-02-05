<template>
  <section>
    <v-container>
      <div style="margin-bottom: 4rem;"></div>
      <v-card>
        <v-list-item>
          <v-list-item-avatar :size="150" tile>
            <v-img :src="require('../assets/philam7s.png')"></v-img>
          </v-list-item-avatar>
          <v-card-text>
            <h2>About 7s League</h2>
            <div class="mb-2"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae debitis doloribus id incidunt
               necessitatibus odio provident quo reiciendis repudiandae similique soluta tempora tenetur, totam
               voluptates? Accusantium ad aliquam aut dolorum ducimus, eius excepturi exercitationem illo iste
               laboriosam laborum magnam mollitia natus omnis optio possimus provident quaerat, quia soluta unde?</p>
          </v-card-text>
        </v-list-item>
        <v-card-title>Tondo FC's Upcoming Match</v-card-title>
        <v-container>
          <game-schedule-item></game-schedule-item>
        </v-container>
        <v-card-title>Tondo FC's Match Schedules</v-card-title>
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="primary"
          grow
        >
          <v-tab
            v-for="item in items"
            :key="item"
          >
            <span class="text-capitalize">{{ item }}</span>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card-text>
              <game-schedule-item></game-schedule-item>
              <v-divider></v-divider>
              <div class="mb-1"></div>
              <game-schedule-item></game-schedule-item>
              <v-divider></v-divider>
              <div class="mb-1"></div>
              <game-schedule-item></game-schedule-item>
              <v-divider></v-divider>
              <div class="mb-1"></div>
              <game-schedule-item></game-schedule-item>
              <div class="mb-1"></div>
            </v-card-text>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>
  </section>
</template>

<script>
    import GameScheduleItem from "../components/GameScheduleItem";
    export default {
        name: "seven-s-league",
        components: {GameScheduleItem},
        data() {
            return {
                tab: null,
                items: [
                    "U21", "U17", "U15", "U13"
                ],
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            };
        }
    };
</script>
