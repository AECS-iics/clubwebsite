<template>
  <v-app class="bg-grey-lighten-5">
    <!-- Top App Bar -->
    <v-app-bar app color="#194666" dark height="80">
      <!-- Logo -->
      
     
      <v-img
  src="/images/logo2.png"
  alt="AECS Club Logo"
  max-height="90"
  max-width="150"
  contain
  class="cursor-pointer"
  @click="$router.push('/')"
/>
    
      <v-spacer />

      <!-- Desktop Navigation (icon + text) -->
      <div class="d-none d-sm-flex">
        <v-btn
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          text
          class="text-white poppins-font"
          style="letter-spacing: normal;"
        >
          <v-icon start>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </div>

      <!-- Mobile Hamburger -->
      <v-btn
        icon
        class="d-flex d-sm-none"
        @click="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
    >
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          link
          class = "poppins-font"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Page Content -->
    <v-main class="d-flex flex-column">
      <v-container class="flex-grow-1 pa-0">
        <NuxtPage />
      </v-container>
    </v-main>

    <!-- Global Footer -->
    <v-footer app color="#2B2828" class="text-center text-white py-6">
      <v-container fluid>
        <v-row>
          <!-- About Us -->
          <v-col cols="12" sm="6" class="mb-4 mb-sm-0 text-left">
            <h3 class="mb-2 teacher-font">About us</h3>
            <div class="poppins-font" style="font-size: 12px;">
              The AECS Club is a student-led organization that fosters innovation,
              collaboration, and hands-on learning in applied engineering and computer science.
              We aim to connect students through exciting projects, events, and workshops.
            </div>
          </v-col>

          <!-- Social Media -->
          <v-col cols="12" sm="6" class="text-right">
            <h3 class="mb-4 mr-2 teacher-font">Connect with us</h3>
            <a href="https://www.instagram.com/iics.aecs/" target="_blank" class="mx-3 text-white">
              <v-icon size="30">mdi-instagram</v-icon>
            </a>
            <a href="https://www.linkedin.com/company/applied-engineering-cs-aecs/" target="_blank" class="mx-3 text-white">
              <v-icon size="30">mdi-linkedin</v-icon>
            </a>
            <a href="https://twitter.com" target="_blank" class="mx-3 text-white">
              <v-icon size="30">mdi-whatsapp</v-icon>
            </a>
          </v-col>
        </v-row>

        <v-divider class="my-4" color="grey"></v-divider>

        <span class="text-caption">
          &copy; {{ new Date().getFullYear() }} AECS Club. All rights reserved.
          <div style="color: #2B2828;">adam dali was here haha</div>
        </span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#imports'

const drawer = ref(false)

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100..900&family=Teachers:wght@400..800&display=swap'
    }
  ]
})

const navItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Projects', to: '/events', icon: 'mdi-cog' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email' }
]
</script>

<style scoped>
.teacher-font {
  font-family: 'Teachers', sans-serif;
}
.poppins-font {
  font-family: 'Poppins', sans-serif;
}
</style>
