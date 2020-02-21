<template>
  <v-card>
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
        <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="194"
    ></v-img>

    <v-card-text>
      Visit ten places on our planet that are undergoing the biggest changes today.
    </v-card-text>

    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        text
        color="primary"
      >
        Read
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        name: "article-preview-item"
    };
</script>
