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

      <v-list flat>
        <div v-for="mainMenuItem in mainMenuItems" :key="mainMenuItem.title">
          <div v-if="mainMenuItem.subMenuItems">
            <v-list-group
              :prepend-icon="mainMenuItem.icon"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ mainMenuItem.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="subMenuItem in mainMenuItem.subMenuItems"
                :key="subMenuItem.title"
                :to="subMenuItem.link"
                link
              >
                <v-list-item-content>
                  <v-list-item-title>{{ subMenuItem.title }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>{{ subMenuItem.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </div>

          <div v-else>
            <v-list-item
              :to="mainMenuItem.link"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ mainMenuItem.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ mainMenuItem.title }}</v-list-item-title>
            </v-list-item>
          </div>

        </div>
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
    mainMenuItems: [
      {
        title: 'Dashboards',
        icon: 'mdi-chart-bar',
        link: '/dashboards',
      },
      {
        title: 'Finances',
        icon: 'mdi-cash-multiple',
        link: '/finances',
      },
      {
        title: 'Journals',
        icon: 'mdi-notebook-multiple',
        subMenuItems: [
          { title: 'Bike Rides', icon: 'mdi-bike', link: '/bikerides' },
          { title: 'Books', icon: 'mdi-bookshelf', link: '/books' },
          { title: 'Health Notes', icon: 'mdi-medical-bag', link: '/healthnotes' },
          { title: 'Hikes', icon: 'mdi-walk', link: '/hikes' },
          { title: 'Life Notes', icon: 'mdi-note', link: '/lifenotes' },
          { title: 'Workouts', icon: 'mdi-weight-lifter', link: '/workouts' },
        ],
      },
      {
        title: 'People',
        icon: 'mdi-account-multiple',
        link: '/people',
      },
      {
        title: 'Settings',
        icon: 'mdi-cog',
        subMenuItems: [{ title: 'Tags', icon: 'mdi-tag-multiple', link: '/settings/tags' }],
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
