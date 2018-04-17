import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      tickets: [],
      user: {},
      tags: new Set(['Bug', 'Feature Request']),
    },
    getters: {
      tickets: state => state.tickets,
      user: state => state.user,
      tags: state => Array.from(state.tags),
    },
    mutations: {
      setTickets(state, tickets) {
        state.tickets = tickets;
      },
      setUser(state, user) {
        state.user = user;
      },
      setTags(state, tags) {
        state.tags.add(tags);
      }
    },
    actions: {
      getTickets: function(context) {
        axios.get("/api/tickets").then(response => {
          context.commit('setTickets', response.data);
        }).catch(err => console.log('Failed to get tickets', err));
      },
      addTicket: function(context, ticket) {
        axios.post("/api/tickets", ticket).then(response => {
          context.dispatch('getTickets');
        }).catch(err => console.log('Failed to add a ticket', err));
      },
      // addTag: function (context, tag) {
      //   axios.post('/api/tag', tag)
      //     .then(response => {
      //       context.commit('setTags', response.data.tags);
      //     }).catch(err => console.log('Failed to get tags', err));
      // },
      // getTag: function (context) {
      //   axios.get('/api/tag')
      //     .then(response => {
      //       context.commit('setTags', response.data.tags);
      //     }).catch(err => console.log('Failed to get tags', err));
      // },
      deleteTicket: function(context, ticket) {
        console.log(ticket);
        axios.delete("/api/tickets/" + ticket.id).then(response => {
          context.dispatch('getTickets');
          return true;
        }).catch(err => {});
      },
      resolveTicket: function(context, ticket) {
        console.log(ticket);
        axios.put("/api/tickets/" + ticket.id, {
          ...ticket,
          resolved: ticket.resolved ? '' : 'true'
        } ).then(response => {
          context.dispatch('getTickets');
          return true;
        }).catch(err => {});
      },
      login: function(context, data) {
        axios.post('/api/login', data).then(response => {
          if (!response.data.error) {
            console.log('Got back: ', response.data);
            context.commit('setUser', response.data);
          } else {
            console.log(response.data.error);
          }
        }).catch(err => console.log('Failed to login', err));
      },
      register: function (context, data) {
        axios.post('/api/user', data).then(response => {
          console.log('Got back: ', response.data);
          context.commit('setUser', response.data);
        }).catch(err => console.log('Failed to register', err));
      }

    },
})
