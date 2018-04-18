<template>
  <div id="tickets">
    <p>
    We may contact you about any ticket(s) you submit.
    You can resolve any ticket, but you can only delete ones you submitted.
    </p>
    <ticket-form/>
    <div id="filters">
      <button type="button" id="resolved" class="btn light-green accent-4" @click="showResolved">Resolved</button>
      <button type="button" id="unresolved" class="btn light-green accent-4" @click="showUnresolved">Unresolved</button>
      <button type="button" id="all" class="btn light-green accent-4" @click="showAll">All</button>
    </div>
    <div id="scroll">
      <ticket v-for="ticket in filteredTickets" :key="ticket.name + ticket.problem" :ticket="ticket" />
    </div>
  </div>
</template>

<script>
  import TicketForm from './TicketForm';
  import Ticket from './Ticket';

  export default {
    components: {
      Ticket,
      TicketForm
    },
    data() {
      return {
        filter: 'all'
      }
    },
    created: function () {
      this.$store.dispatch('getTickets');
    },
    computed: {
      tickets: function () {
        return this.$store.getters.tickets;
      },
      filteredTickets: function () {
        if (this.filter === 'unresolved') {
          return this.tickets.filter(ticket => !ticket.resolved);
        } else if (this.filter === 'resolved') {
          return this.tickets.filter(ticket => ticket.resolved);
        } else if (this.filter === 'all') {
          return this.tickets;
        }
      }
    },
    methods: {
      showResolved: function () {
        this.filter = 'resolved';
      },
      showUnresolved: function () {
        this.filter = 'unresolved';
      },
      showAll: function () {
        this.filter = 'all';
      }
    }
  }
</script>

<style scoped>
  #tickets {
    margin: auto;
    height: 100%;
    max-width: 50%;
  }

  #scroll {
    max-height: 500px;
    overflow: auto;
  }

  #filters {
    display: grid;
    grid-column-gap: 5px;
    max-width: 200px;
    margin-top: 15px;
  }

  #resolved {
    grid-column: 1;
    grid-row: 1;
  }
  #unresolved {
    grid-column: 2;
    grid-row: 1;
  }
  #all {
    grid-column: 3;
    grid-row: 1;
  }
</style>
