<template>
  <div class="ticket">
    <div class="problem card">
      <div class="card-title" >{{this.ticket.name}}</div>
      <div class="card-body">Problem: {{this.ticket.problem}}</div>
      <div class="">Priority: {{this.ticket.priority | priorityName }}</div>
      <div class="">Reported by: {{this.ticket.email}}</div>
      <div class="">Reported on: {{this.ticket | dateFormat }}</div>
      <div class="">Tags: {{this.ticket.tags}}</div>
      <div class="card-action">
        <button v-on:click.prevent="resolveTicket()" class="white-text light-green accent-4 btn-small">
          {{this.ticket.resolved ? 'Unresolve' : 'Resolve'}}
        </button>
        <button v-on:click.prevent="deleteTicket()" class="white-text btn-small light-green accent-4">Delete</button>
      </div>

    </div>
      </div>
</template>

<script>
    export default {
        name: "Ticket",
      props: ['ticket'],
      methods: {
          deleteTicket: function () {
             this.$store.dispatch('deleteTicket', this.ticket);
          },
        resolveTicket: function () {
          this.$store.dispatch('resolveTicket', this.ticket);
        }
      },
      filters: {
        dateFormat: function(ticket) {
          let month = [];
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
          let date = new Date(ticket.created_at);
          let monthName = month[date.getMonth()];
          return `${date.getDate()} ${monthName} ${date.getFullYear()}`
        },
        priorityName: function(priority) {
          let name = [];
          name[0] = "High";
          name[1] = "Medium";
          name[2] = "Low";
          return name[priority];
        },
      },
    }
</script>

<style scoped>

</style>
