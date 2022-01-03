<template>
  <div id="tag-form">
    <v-card>
      <v-img
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-card-title class="py-8">
          EDIT FORM {{ selectedTag.name }}
          <v-spacer></v-spacer>
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                @click="hasTagChanged() ? dialog = true : closeForm()"
                icon
                v-bind="attrs"
                v-on="on">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
            <span>Cancel</span>
          </v-tooltip>
        </v-card-title>
      </v-img>
      <v-card-subtitle class="pb-1 pt-10">
        <v-text-field
          v-model="selectedTag.name"
          filled
          :label="`${getFieldTitle('name')}`"
        >
        </v-text-field>
        <v-textarea
          v-if="selectedTag.description === ''"
          :label="`${getFieldTitle('description')}`"
          rows="1"
          v-model="selectedTag.description"
        >
        </v-textarea>
        <v-textarea
          v-else
          :label="`${getFieldTitle('description')}`"
          v-model="selectedTag.description"
        >
          {{ selectedTag.description }}
        </v-textarea>
      </v-card-subtitle>
      <v-card-text class="pl-8">
        <v-checkbox
          :label="`${getFieldTitle('isType')}`"
          v-model="selectedTag.isType"
        >
        </v-checkbox>
        <v-checkbox
          :label="`${getFieldTitle('isTag')}`"
          v-model="selectedTag.isTag"
        >
        </v-checkbox>
        <v-checkbox
          :label="`${getFieldTitle('isWorkout')}`"
          v-model="selectedTag.isWorkout"
        >
        </v-checkbox>
        <v-checkbox
          :label="`${getFieldTitle('isPerson')}`"
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
          v-if="hasTagChanged()"
          @click="saveForm"
          class="mb-2, text-capitalize"
          color="primary">
          Save
        </v-btn>
        <v-btn
          v-else
          @click="saveForm"
          class="mb-2, text-capitalize"
          color="disabled"
          disabled>
          Save
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

      <v-dialog max-width="350" v-model="dialog">
        <v-card>
          <v-card-title class="text-h5">
            You have unsaved changes!
          </v-card-title>
          <v-card-text>
            Do you want to close this tag <strong>without</strong> saving your
            changes?
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Yes (Close)
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              No (Go Back)
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-card>
  </div>
</template>

<script>
export default {
  name: 'TagForm',

  data() {
    return {
      cachedTag: {
        name: this.selectedTag.name,
        description: this.selectedTag.description,
        isType: this.selectedTag.isType,
        isTag: this.selectedTag.isTag,
        isWorkout: this.selectedTag.isWorkout,
        isPerson: this.selectedTag.isPerson,
      },
      dialog: false,
    };
  },

  computed: {
  },

  methods: {
    closeForm() {
      this.selectedTag.name = this.cachedTag.name;
      this.selectedTag.description = this.cachedTag.description;
      this.selectedTag.isType = this.cachedTag.isType;
      this.selectedTag.isTag = this.cachedTag.isTag;
      this.selectedTag.isWorkout = this.cachedTag.isWorkout;
      this.selectedTag.isPerson = this.cachedTag.isPerson;
      this.toggleEditMode();
      this.deselectTag();
    },

    hasTagChanged() {
      const isChanged = (this.cachedTag.name !== this.selectedTag.name
        || this.cachedTag.description !== this.selectedTag.description
        || this.cachedTag.isType !== this.selectedTag.isType
        || this.cachedTag.isTag !== this.selectedTag.isTag
        || this.cachedTag.isWorkout !== this.selectedTag.isWorkout
        || this.cachedTag.isPerson !== this.selectedTag.isPerson
      );
      return isChanged;
    },

    saveForm() {
      console.log('SaveForm(): Implement me, please!');
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
