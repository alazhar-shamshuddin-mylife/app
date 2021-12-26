<template>
  <div id="tag-table">
    <tag-form
      v-bind:selectedTag="selectedTag"
      v-bind:headers="headers"
      v-if="Object.keys(selectedTag).length !== 0"
      v-click-outside="deselectTag"
    >
    </tag-form>

    <v-card v-else>
      <v-card-title class="py-8">
        Tags
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          filled
          rounded
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2, text-capitalize">Create Tag</v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="tags"
        :items-per-page="-1"
        :search="search"
        :sort-by="['name']"
        :sort-desc="[false]"
        fixed-header
        multi-sort
        @click:row="handleClick"
      >
        <template v-slot:[`item.isType`]="{ item }">
          <v-simple-checkbox v-model="item.isType" disabled />
        </template>
        <template v-slot:[`item.isTag`]="{ item }">
          <v-simple-checkbox v-model="item.isTag" disabled />
        </template>
        <template v-slot:[`item.isWorkout`]="{ item }">
          <v-simple-checkbox v-model="item.isWorkout" disabled />
        </template>
        <template v-slot:[`item.isPerson`]="{ item }">
          <v-simple-checkbox v-model="item.isPerson" disabled />
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import TagForm from '@/components/TagForm.vue';

export default {
  name: 'TagTable',

  components: {
    TagForm,
  },

  data() {
    return {
      search: '',
      selectedTag: {},
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

  methods: {
    deselectTag() {
      this.selectedTag = {};
    },

    handleClick(row) {
      this.selectedTag = row;
    },
  },

  props: {
    tags: Array,
  },
};
</script>

<style scoped>
.selected {
    background-color: red
}
</style>
