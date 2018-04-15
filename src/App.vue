<template>
  <div>
    <app-header />
    <div v-if="!this.$store.getters.user.email">
      <login />
    </div>
    <div v-else>
      <tickets />
    </div>
  </div>
</template>

<script>
  import Login from './components/Login';
  import Tickets from './components/Tickets';
  import AppHeader from "./components/AppHeader";
    export default {
        components: {
          AppHeader,
          Login,
          Tickets
        },
        data() {
            return {
                addedName: '',
                addedProblem: '',
                addedPriority: '',
                tickets: [],
              tags: '',
            };
        },
      created: function() {
        console.log(this.$store.getters.user);
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
                console.log(date);
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
        methods: {

        }
    }
</script>

<style>

</style>
