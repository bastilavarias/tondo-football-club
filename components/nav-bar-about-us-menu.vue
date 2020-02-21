<template>
  <v-list>
    <v-subheader>More Links</v-subheader>
    <v-list-item :to="{ name: 'about-us' }" active-class="nav-bar-menu-button-active">
      <v-list-item-content>
        <v-list-item-title>Tondo Football Club</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="{ name: 'about-us' }" active-class="nav-bar-menu-button-active">
      <v-list-item-content>
        <v-list-item-title>Gallery</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="{ name: 'about-us' }" active-class="nav-bar-menu-button-active">
      <v-list-item-content>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item :to="{ name: 'about-us' }" active-class="nav-bar-menu-button-active">
      <v-list-item-content>
        <v-list-item-title>FAQ</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
    export default {
        name: "nav-bar-about-us-menu"
    };
</script>
