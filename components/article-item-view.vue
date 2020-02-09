<template>
  <article>
    <v-card
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4 grey--text">February 20, 2020</div>
          <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
          <v-list-item-subtitle>{{ content }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        >
          <v-img :src="require('../assets/posters/84919703_651988492009420_6689470159758819328_o.jpg')"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text small icon color="primary">
          <v-icon small>mdi-book-open</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script>
    export default {
        name: "article-item-view",

        props: {
            title: {
                type: String,
                required: true
            },

            content: {
                type: String,
                required: true
            },
        }
    };
</script>
