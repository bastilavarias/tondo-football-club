<template>
  <v-card>
    <v-list >
      <v-subheader>
        <v-icon small class="mr-1">mdi-link-variant</v-icon>
        Quick Links
      </v-subheader>
      <template v-for="(link, index) in links">
        <v-list-item :key="index" :to="link.to" exact>
          <v-list-item-content>
            <v-list-item-subtitle>
              <span class="primary--text text-underline" style="text-decoration: underline;">{{link.name}}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
    export default {
        name: "quick-links",

        props: {
            links: {
                type: Array,
                required: true
            }
        }
    };
</script>
