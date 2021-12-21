<template>
  <v-app>
    <v-app-bar app clipped-left color="primary" dark class="mr-42">
      <v-toolbar-title>
        <router-link to="/" class="text-decoration-none white--text">
          MyLife
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mr-0"
            icon
            left
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar size="42px">
              <img
                src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="Jane Smith"
              >
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in profileMenuitems"
            :key="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      :mini-variant.sync="mini"
      permanent
      v-model="drawer"
    >
      <template v-slot:prepend>
        <v-list-item two-line class="px-2">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>

          <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </template>

      <v-divider></v-divider>

    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          :to="child.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ child.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ child.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list>

    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app color="primary lighten-1" dark padless>
      <v-col
        class="text-center"
        cols="12"
      >
        <strong>MyLife</strong> {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: true,
    items: [
      {
        title: 'Dashboards',
        icon: 'mdi-chart-bar',
      },
      {
        title: 'Finances',
        icon: 'mdi-cash-multiple',
      },
      {
        title: 'Journals',
        icon: 'mdi-notebook-multiple',
        items: [
          { title: 'Bike Rides', icon: 'mdi-bike', link: '/' },
          { title: 'Books', icon: 'mdi-bookshelf', link: '/' },
          { title: 'Health Notes', icon: 'mdi-medical-bag', link: '/' },
          { title: 'Hikes', icon: 'mdi-walk', link: '/' },
          { title: 'Life Notes', icon: 'mdi-note', link: '/' },
          { title: 'Workouts', icon: 'mdi-weight-lifter', link: '/' },
        ],
      },
      {
        title: 'People',
        icon: 'mdi-account-multiple',
        items: [{ title: 'People', icon: 'mdi-account-multiple', link: '/people' }],
      },
      {
        title: 'Settings',
        icon: 'mdi-cog',
        items: [{ title: 'Tags', icon: 'mdi-tag-multiple', link: '/settings/tags' }],
      },
    ],
    mini: false,
    profileMenuitems: [
      { title: 'Profile' },
      { title: 'Logout' },
    ],
    showPassword: false,
  }),
};
</script>
