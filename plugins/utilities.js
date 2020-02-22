export default {
  computed: {
    screenBreakPoint() {
      return this.$vuetify.breakpoint.name;
    },

    isOnMobile() {
      return this.screenBreakPoint === "xs" || this.screenBreakPoint === "sm";
    }

  },

  methods: {
    cutText(text, limit) {
      let transformedText = text;
      if (text.length > limit) {
        transformedText = `${text.slice(0, limit)}...`;
      }
      return transformedText;
    },

    getTeamList({age, gender}, list) {
      const filteredList = list.filter(team => team.details.category.age === age && team.details.category.gender === gender);
      return filteredList;
    }
  }
};
