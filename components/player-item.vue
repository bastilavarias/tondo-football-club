<template>
  <div>
    <v-card class="d-inline-block mx-auto" :height="isOnMobile ? '300' : '200'">
    <v-avatar tile size="100%">
      <v-img src="https://image.shutterstock.com/image-vector/soccer-player-graphic-trail-600w-552274498.jpg"></v-img>
    </v-avatar>
  </v-card>
    <div class="mb-3"></div>
    <div class="text-center">
      <h1 class="title">Sebastian Curtis T. Lavarias</h1>
      <p class="subtitle-1">Keeper</p>
    </div>
  </div>
</template>

<script>
    import utilities from "../plugins/utilities";

    export default {
        name: "player-item",

        mixins: [utilities]
    };
</script>
