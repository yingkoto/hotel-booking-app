<template>
  <v-app>
  <v-navigation-drawer v-model="drawer" class="light-blue accent-3" app dark>
    <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon color="black">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="black--text font-weight-medium">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <!-------------- Logout ----------->
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
   
  </v-navigation-drawer>

  <v-app-bar flat app class="grey darken-4" height="70">
    <v-app-bar-nav-icon large color="white" @click="drawer = true"></v-app-bar-nav-icon>
    <v-img class="logo-img pa-5" src="@/assets/royal_shoreline_hotel_logo.svg" alt="royal shoreline hotel logo" max-height="85" max-width="85"></v-img>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>

    </v-container>

  </v-main>
</v-app>
</template>

<style>
.logo-img {
  display: block;
  margin: 0 auto;
}
</style>

<script>
export default {
  data: () => ({ 
    drawer: null,
    items: [
          { title: 'My Bookings', icon: 'mdi-clipboard-list-outline', to: '/mybookings' },
          { title: 'Booking List', icon: 'mdi-room-service-outline', to: '/bookinglist' },
          { title: 'Booking Form', icon: 'mdi-book-edit-outline', to: '/bookingform' },
          { title: 'Register', icon: 'mdi-account-plus-outline', to: '/register' },
          { title: 'Login', icon: 'mdi-account-outline', to: '/' }
        ],
    }),
}
</script>