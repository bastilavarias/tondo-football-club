<template>
  <v-chip
    :class="`${className}`"
    small
    color="primary"
    text-color="white"
    label
  >
    Player Name
  </v-chip>
</template>

<script>
    export default {
        name: "player-chip",

        props: {
            className: {
                type: String,
                required: false
            }
        }
    };
</script>
