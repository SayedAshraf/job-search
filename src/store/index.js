import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: {},
    dispalyjob: {},
    rows: 0,
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
  },
  actions: {
    async fetchData() {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const res = await fetch("jobs.json");
          const val = await res.json();
          resolve(val);
        }, 500);
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
  },
  modules: {},
});
