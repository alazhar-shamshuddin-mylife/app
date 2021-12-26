<template>
  <div id="tag-form">
    <v-card>
      <v-card-title class="py-8">
        {{ selectedTag.name }}
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2, text-capitalize">Edit</v-btn>
      </v-card-title>
      <v-card-subtitle>
        <p v-if="selectedTag.description === ''" class="text--disabled">
          This tag does not have a description. Please enter one.
        </p>
        <p v-else>
          {{ selectedTag.description }}
        </p>
      </v-card-subtitle>
      <v-card-text class="pl-8">
        <v-checkbox
          v-model="selectedTag.isType"
          :label="`${getFieldTitle('isType')}`"
        ></v-checkbox>
        <v-checkbox
          v-model="selectedTag.isTag"
          :label="`${getFieldTitle('isTag')}`"
        ></v-checkbox>
        <v-checkbox
          v-model="selectedTag.isWorkout"
          :label="`${getFieldTitle('isWorkout')}`"
        ></v-checkbox>
        <v-checkbox
          v-model="selectedTag.isPerson"
          :label="`${getFieldTitle('isPerson')}`"
        ></v-checkbox>
      </v-card-text>
      <template v-slot:[`selectedTag.isType`]="{ selectedTag }">
        <v-simple-checkbox v-model="selectedTag.isType" disabled />
      </template>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TagForm',

  methods: {
    getFieldTitle(name) {
      return this.headers.find((header) => header.value === name).text;
    },
  },

  props: {
    selectedTag: Object,
    headers: Array,
  },
};
</script>
