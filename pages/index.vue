<template>
    <v-container app>
      <v-main>
        <v-row>
        <v-col cols="12" v-for="i in 50" :key="i">
          <v-card class="mb-4">
            <v-card-title class="text-h6">Section {{ i }}</v-card-title>
            <v-card-text>
              Test {{ i }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      </v-main>
      
    </v-container>
  </template>