export default {
  computed: {
    screenBreakPoint() {
      return this.$vuetify.breakpoint.name;
    },

    isOnMobile() {
      return this.screenBreakPoint === "xs" || this.screenBreakPoint === "sm";
    },

    test() {
      return this.$vuetify.breakpoint;
    }
  },

  methods: {
    cutText(text, limit) {
      let transformedText = text;
      if (text.length > limit) {
        transformedText = `${text.slice(0, limit)}...`;
      }
      return transformedText;
    }
  }
};
