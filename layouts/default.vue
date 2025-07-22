<template>
  <v-app class="bg-grey-lighten-5">
    <!-- Top App Bar -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <!-- Side Navigation -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Page Content -->
    <v-main class="pa-4">
      <v-container>
        <NuxtPage />
      </v-container>
     
    </v-main>

    <!-- Global Footer -->
    <v-footer color="grey-lighten-4" class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <span class="text-caption">
              &copy; {{ new Date().getFullYear() }} AECS Club. All rights reserved.
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const title = 'AECS Club'

const navItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Projects', to: '/events', icon: 'mdi-cog' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email' }
]
</script>