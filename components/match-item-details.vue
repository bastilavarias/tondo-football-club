<template>
  <v-dialog width="750" persistent @click:outside="$emit('close-dialog')" v-model="isOpen">
    <v-card>
      <v-card-title>Match Details</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="5" order="2" order-md="1">
            <p><span class="font-weight-bold">Teams:</span> Tondo FC VS Departivo Matu</p>
            <p><span class="font-weight-bold">Date:</span> February 5, 2020 6:00 PM</p>
            <p><span class="font-weight-bold">Location:</span> Lorem ipsum dolor sit amet.</p>
            <p><span class="font-weight-bold">Category:</span> Open</p>
            <p><span class="font-weight-bold">Season:</span> 7</p>
            <p><span class="font-weight-bold">Game Result:</span> N/A</p>
          </v-col>
          <v-col cols="12" md="7" order="1" order-md="2">
            <v-card>
              <v-img :src="require('../assets/posters/84655947_651944322013837_1566462606795866112_o.jpg')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title>Tondo FC's Lineup</v-card-title>
      <v-card-text>
        <template v-for="n in 5">
          <div :key="n">
            <small class="caption d-block">Position</small>
            <template v-for="n in 6">
              <v-chip color="primary" small label class="white--text ma-1" :key="n">Player Name</v-chip>
            </template>
          </div>
          <div class="mb-3"></div>
        </template>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn text class="black--text" @click="$emit('close-dialog')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    export default {
        name: "match-item-details",

        props: {
            isOpen: {
                type: Boolean,
                required: true
            }
        }
    };
</script>
