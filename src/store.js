import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      tickets: [],
      user: {},
      tags: [],
    },
    getters: {
      tickets: state => state.tickets,
      user: state => state.user,
      tags: state => state.tags,
    },
    mutations: {
      setTickets(state, tickets) {
        state.tickets = tickets;
      },
      setUser(state, user) {
        state.user = user;
      },
      setTags(state, tags) {
        state.tags = tags;
      }
    },
    actions: {
      getTickets: function(context) {
        axios.get("/api/tickets").then(response => {
          context.commit('setTickets', response.data.tickets);
        }).catch(err => console.log('Failed to get tickets', err));
      },
      addTicket: function(context, ticket) {
        axios.post("/api/tickets", ticket).then(response => {
          context.commit('setTickets', response.data.tickets);
        }).catch(err => console.log('Failed to add a ticket', err));
      },
      addTag: function (context, tag) {
        axios.post('/api/tag', tag)
          .then(response => {
            context.commit('setTags', response.data.tags);
          }).catch(err => console.log('Failed to get tags', err));
      },
      getTag: function (context) {
        axios.get('/api/tag')
          .then(response => {
            context.commit('setTags', response.data.tags);
          }).catch(err => console.log('Failed to get tags', err));
      },
      login: function(context, username, password) {
        axios.post('/api/login', {
          username,
          password
        }).then(response => {
          context.commit('setUser', response.data.user);
        }).catch(err => console.log('Failed to login', err));
      }

    },
})