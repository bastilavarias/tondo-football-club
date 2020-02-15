<template>
  <div id="match-schedule-item-preview" class="py-1">
    <v-row justify="space-around" align="center">
      <span class="font-weight-bold caption grey--text mr-2">Feb 02, 2020</span>
      <div style="display: flex; align-items: center;">
          <span class="caption font-weight-bold black--text">Tondo FC</span>
        <span class="caption font-weight-bold primary--text mx-1">VS</span>
        <span class="caption font-weight-bold black--text">Darto Tite</span>
      </div>
    </v-row>
  </div>
</template>

<script>
    import utilities from "../plugins/utilities";

    export default {
        name: "match-schedule-item-preview",

        mixins: [utilities]
    };
</script>

<style scoped>
  #match-schedule-item-preview {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
  }
</style>
