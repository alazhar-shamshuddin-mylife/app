<template>
  <div class="tags">

    <!-- <hello-world /> -->

    <h2>Tags</h2>

    <v-container>
      <v-data-table
        :headers="headers"
        :items="tags"
        :sort-by="['name']"
        :sort-desc="[true]"
        :items-per-page="-1"
        multi-sort
        class="elevation-0"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>System Tags</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>

            <template>
              <v-btn
                color="primary"
                dark
                class="mb-2"
              >
                New Item
              </v-btn>
            </template>
          </v-toolbar>
        </template>

        <template v-slot:[`item.isType`]="{ item }">
          <v-simple-checkbox
            v-model="item.isType"
            disabled
          >
          </v-simple-checkbox>
        </template>
        <template v-slot:[`item.isTag`]="{ item }">
          <v-simple-checkbox
            v-model="item.isTag"
            disabled
          >
          </v-simple-checkbox>
        </template>
        <template v-slot:[`item.isWorkout`]="{ item }">
          <v-simple-checkbox
            v-model="item.isWorkout"
            disabled
          >
          </v-simple-checkbox>
        </template>
        <template v-slot:[`item.isPerson`]="{ item }">
          <v-simple-checkbox
            v-model="item.isPerson"
            disabled
          >
          </v-simple-checkbox>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
// import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Tags',

  components: {
    // HelloWorld,
  },

  data() {
    return {
      info: null,
      tags: [],
      person: null,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Type', value: 'isType' },
        { text: 'Tag', value: 'isTag' },
        { text: 'Workout', value: 'isWorkout' },
        { text: 'Person', value: 'isPerson' },
        { text: 'Description', value: 'description' },
      ],

    };
  },

  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        this.info = response;
      });

    axios
      .get('http://localhost:27002/api/tags')
      .then((response) => {
        this.tags = response.data.data;
      });
  },
};
</script>
