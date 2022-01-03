<template>
  <div id="tag-table">
    <tag
      v-if="Object.keys(selectedTag).length !== 0"
      v-bind:deselectTag="deselectTag"
      v-bind:headers="headers"
      v-bind:isEditMode="isEditMode"
      v-bind:selectedTag="selectedTag"
      v-bind:toggleEditMode="toggleEditMode"
      v-click-outside="deselectTag"
    >
    </tag>

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
import Tag from '@/components/Tag.vue';

export default {
  name: 'TagTable',

  components: {
    Tag,
  },

  data() {
    return {
      isEditMode: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: 'Description', value: 'description' },
        { text: 'Type', value: 'isType' },
        { text: 'Tag', value: 'isTag' },
        { text: 'Workout', value: 'isWorkout' },
        { text: 'Person', value: 'isPerson' },
      ],
      search: '',
      selectedTag: {},
    };
  },

  methods: {
    deselectTag() {
      this.selectedTag = {};
    },

    handleClick(row) {
      this.selectedTag = row;
    },

    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
  },

  props: {
    tags: Array,
  },
};
</script>
