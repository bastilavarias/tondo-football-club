<template>
  <v-list>
    <v-subheader>Quick Links</v-subheader>
    <v-list-item to="#featured-articles" exact>
      <v-list-item-content>
        <v-list-item-title>Featured Articles</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="#about-us" exact>
      <v-list-item-content>
        <v-list-item-title>About Us</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="#mission-and-vision" exact>
      <v-list-item-content>
        <v-list-item-title>Mission & Vision</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="#custom-footer">
      <v-list-item-content>
        <v-list-item-title>Reach Out</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
      name: "nav-bar-home-menu"
  }
</script>
