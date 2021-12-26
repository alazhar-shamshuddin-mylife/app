<template>
  <div class="tags">
    <tag-table v-bind:tags="tags"></tag-table>
  </div>
</template>

<script>
import axios from 'axios';
import TagTable from '@/components/TagTable.vue';

export default {
  name: 'Tags',

  components: {
    TagTable,
  },

  data() {
    return {
      title: 'test header',
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
        { text: 'Actions', value: 'actions', sortable: false },
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
