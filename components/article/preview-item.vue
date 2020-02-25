<template>
  <v-card>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="5">
          <v-img
            width="auto"
            height="200"
            class="mx-auto"
            :src="content.banner"
          ></v-img>
        </v-col>

        <v-col
          cols="12"
          md="7"
          class="text-left pl-0"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title text-capitalize">{{title}}</v-list-item-title>
              <v-list-item-subtitle class="text-capitalize">by {{author.name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <span class="mr-2">{{cutText(content.text, 62)}}</span>
            <span class="caption grey--text text-capitalize">{{date}}</span>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="primary" class="text-capitalize" block
                   :to="{name: 'articles-slug', params: {slug}}" exact>Read
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
    import utilities from "../../plugins/utilities";

    export default {
        name: "article-preview-item",

        mixins: [utilities],

        props: {
            title: {
                type: String,
                required: true
            },

            slug: {
                type: String,
                required: true
            },

            date: {
                type: String,
                required: true
            },

            author: {
                type: Object,
                required: true
            },

            content: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                currentImageIndex: null
            };
        }
    };
</script>
