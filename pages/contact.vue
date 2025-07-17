<template>
  <v-container fluid class="pa-10">
    <v-row class="text-center">
      <v-col>
        <h1>
          <span class="text-warning font-weight-bold">CONTACT</span>
          <span class="text-primary-darken-4"> US</span>
        </h1>
      </v-col>
    </v-row>

    <v-row class="mt-6" align="center" justify="center">
      <!-- Left Panel - Contact Info -->
      <v-col cols="12" md="4">
        <v-card class="pa-6" color="primary-darken-3" dark>
          <h2 class="mb-2">Contact Information</h2>
          <p class="mb-6">Contact us any time!</p>

          <v-img
            src="/images/logo2.png"
            height="80"
            contain
            class="mb-6"
          ></v-img>

          <v-row class="mb-4" align="center">
            <v-col cols="auto">
              <v-icon>mdi-phone</v-icon>
            </v-col>
            <v-col>+1012 3456 789</v-col>
          </v-row>

          <v-row class="mb-4" align="center">
            <v-col cols="auto">
              <v-icon>mdi-email</v-icon>
            </v-col>
            <v-col>aecs@gmail.com</v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="auto">
              <v-icon>mdi-map-marker</v-icon>
            </v-col>
            <v-col>INTI College Subang</v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- Right Panel - Contact Form -->
      <v-col cols="12" md="8">
        <v-card class="pa-6">
          <v-form>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field
                  label="First Name"
                  variant="outlined"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Last Name"
                  variant="outlined"
                  hide-details
                  value="Doe"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Email"
                  variant="outlined"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Phone Number"
                  variant="outlined"
                  hide-details
                  value="+1 012 3456 789"
                  append-inner-icon="mdi-content-copy"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Message"
                  variant="outlined"
                  rows="4"
                  placeholder="Write your message..."
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>

            <v-btn color="primary-darken-3" class="mt-4" size="large">
              Send Message
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// You can import logo from assets if needed
// import logo from '@/assets/logo.png';
</script>

<style scoped>
.text-warning {
  color: #f9a825; /* yellow accent */
}
</style>
