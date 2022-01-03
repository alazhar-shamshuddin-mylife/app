<template>
  <div id="tag-view">
    <v-card>
      <v-img
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title class="py-8">
          {{ selectedTag.name }}
          <v-spacer></v-spacer>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="closeForm()"
                icon
                v-bind="attrs"
                v-on="on">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
            <span>Close</span>
          </v-tooltip>
        </v-card-title>
      </v-img>
      <v-card-subtitle class="pb-1 pt-10">
        <p v-if="selectedTag.description === ''" class="text--disabled">
          This tag does not have a description. Please enter one.
        </p>
        <p v-else>
          {{ selectedTag.description }}
        </p>
      </v-card-subtitle>
      <v-card-text class="pl-8">
        <v-checkbox
          :label="`${getFieldTitle('isType')}`"
          color="disabled"
          readonly
          v-model="selectedTag.isType"
        >
        </v-checkbox>
        <v-checkbox
          :label="`${getFieldTitle('isTag')}`"
          color="disabled"
          readonly
          v-model="selectedTag.isTag"
        >
        </v-checkbox>
        <v-checkbox
          :label="`${getFieldTitle('isWorkout')}`"
          color="disabled"
          readonly
          v-model="selectedTag.isWorkout"
        >
        </v-checkbox>
        <v-checkbox
          :label="`${getFieldTitle('isPerson')}`"
          color="disabled"
          readonly
          v-model="selectedTag.isPerson"
        >
        </v-checkbox>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          @click="toggleShowDetails"
          icon
        >
          <v-icon>
            {{ isShowDetails ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
          </v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          @click="toggleEditMode"
          class="mb-2, text-capitalize"
          color="primary">
          Edit
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="isShowDetails">
          <v-card-text>
              <div>ID: {{ selectedTag._id }}</div>
              <div>Created: Unavailable</div>
              <div>Updated: Unavailable</div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TagView',

  data() {
    return {
    };
  },

  methods: {
    closeForm() {
      this.deselectTag();
    },
  },

  props: {
    deselectTag: Function,
    getFieldTitle: Function,
    isShowDetails: Boolean,
    selectedTag: Object,
    toggleEditMode: Function,
    toggleShowDetails: Function,
  },
};
</script>
