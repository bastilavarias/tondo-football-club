export const state = () => ({
  sideDrawerState: false
});

export const mutations = {
  setOpenSideDrawer(state) {
    state.sideDrawerState = true;
  },

  setCloseSideDrawer(state) {
    state.sideDrawerState = false;
  },
};
