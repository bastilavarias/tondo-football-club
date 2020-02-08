export default {
  computed: {
    screenBreakPoint() {
      return this.$vuetify.breakpoint.name;
    },

    isOnMobile() {
      return this.screenBreakPoint === "xs" || this.screenBreakPoint === "sm";
    }

  }
};
