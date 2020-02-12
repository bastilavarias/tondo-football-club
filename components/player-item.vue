<template>
  <div>
    <v-card max-width="500" class="mx-auto" flat>
      <v-avatar tile size="100%">
        <v-img src="https://image.shutterstock.com/image-vector/soccer-player-graphic-trail-600w-552274498.jpg"></v-img>
      </v-avatar>
    </v-card>
    <div class="mb-1"></div>
    <div class="text-center px-1 py-1">
      <h1 class="title">Sebastian Curtis T. Lavarias</h1>
      <p class="body-2 text-uppercase font-weight-bold">Keeper</p>
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
