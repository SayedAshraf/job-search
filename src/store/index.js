import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: {},
    dispalyjob: {},
    rows: 0,
    showSpinner: false,
  },
  mutations: {
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_DISPLAYJOBS(state, dispalyjob) {
      state.dispalyjob = dispalyjob;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_Spinner(state, Spinner) {
      state.showSpinner = Spinner;
    },
  },
  getters: {
    jobs(state) {
      return state.jobs;
    },
    dispalyjob(state) {
      return state.dispalyjob;
    },
    rows(state) {
      return state.rows;
    },
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  actions: {
    async fetchData({ commit }) {
      commit("SET_Spinner", true);
      return new Promise((resolve) => {
        setTimeout(async () => {
          const res = await fetch("jobs.json");
          const val = await res.json();
          resolve(val);
          commit("SET_Spinner", false);
        }, 1000);
      });
    },
    async fetchJobs({ dispatch, commit }) {
      const myJson = await dispatch("fetchData");
      commit("SET_JOBS", myJson);
      const displayjobs = myJson.slice(0, 3);
      commit("SET_DISPLAYJOBS", displayjobs);
      commit("SET_ROWS", myJson.length);
    },
    pagination({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const jobs = state.jobs.slice(start, start + perPage);
      commit("SET_DISPLAYJOBS", jobs);
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_JOBS", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("pagination", { currentPage, perPage });
    },
    async Search({ dispatch }, { text }) {
      const myJson = await this.dispatch("fetchData");
      console.log(myJson);
      const values = myJson.filter((val) =>
        val.title.toLowerCase().includes(text.toLowerCase())
      );
      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 3,
      });
    },
  },
  modules: {},
});
