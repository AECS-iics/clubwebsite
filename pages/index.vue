<template>
    <v-container>
      <v-row>
        <v-col cols="12" v-for="i in 100" :key="i">
          <v-card class="mb-4">
            <v-card-title class="text-h6">Section {{ i }}</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
              adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
              Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>