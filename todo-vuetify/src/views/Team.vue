<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">

      <v-layout row wrap v-for="person in team" :key="person.name">
        <v-flex xs12 sm6 md4 lg3>
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              img goes here
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team : [
          { 'name': 'Emily', 'role': 'Back-end Dev'},
          { 'name': 'Francis', 'role': 'UI-UX Dev'},
          { 'name': 'Tom', 'role': 'Back-end Dev'},
          { 'name': 'Sarah', 'role': 'Back-end Dev'},
          { 'name': 'Cameron', 'role': 'QA Dev'}
        ]
      }
    },
    methods: {

    }

  }
</script>
