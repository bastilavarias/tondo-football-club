<template>
  <v-card>
    <v-list >
      <v-subheader>Quick Links</v-subheader>
      <template v-for="(link, index) in links">
        <v-list-item :key="index" :to="link.to" exact>
          <v-list-item-icon>
            <v-icon color="#2196F3" small> mdi-link-variant
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-subtitle>
              <span style="color: #2196F3;">{{link.name}}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
    export default {
        name: "generic-quick-links",

        props: {
            links: {
                type: Array,
                required: true
            }
        }
    };
</script>
