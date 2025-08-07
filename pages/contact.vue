<template>
  <v-container fluid class="pa-10 pa-sm-6 pa-xs-2" color = "black">
    <v-row class="text-left mt-6">
      <v-col>
        <h1>
          <span class="text-warning font-weight-bold teacher-font" style="font-size: 60px;">CONTACT</span>
          <span class="text-primary-darken-4 teacher-font" style="font-size: 60px;"> US</span>
        </h1>
      </v-col>
    </v-row>

    <v-row class="mt-10" align="center" justify="center" no-gutters>
      <!-- Left Panel - Contact Info -->
      <v-col cols="12" md="4" class="poppins-font">
        <v-card elevation = "0" class="pa-10 rounded-0 rounded-s-lg shadow-0 remove-rounded-mobile" color="#1E4666" height="700px">
          <h2 class="mb-1" style="font-weight: 500; font-size:28px;">Contact Information</h2>
          <p class="mb-0">Contact us any time!</p>

          <div style="text-align: left;">
  <v-img
    src="/images/logo2.png"
    height="200"
    width ="180"
    contain
    class="mb-0"
  ></v-img>
</div>

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
      <v-col cols="12" md="8" class="poppins-font">
        <v-card  elevation = "0" class="pa-10 rounded-0 rounded-e-lg shadow-0 remove-rounded-mobile" height="700px">
          <v-form>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field label="First Name" variant="outlined" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Last Name" variant="outlined" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Email" variant="outlined" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Phone Number" variant="outlined" hide-details append-inner-icon="mdi-content-copy"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Message" variant="outlined" rows="4" placeholder="Write your message..." hide-details></v-textarea>
              </v-col>
            </v-row>

            <v-btn
              color="#1E4666"
              class="mt-16 ms-auto"
              size="x-large"
              style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: normal; letter-spacing: normal; text-transform: none;"
            >
              <div class="pa-4">Send Message</div>
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet'
    }
  ]
})
</script>

<style scoped>
.text-warning {
  color: #f9a825;
  /* yellow accent */
}

.teacher-font {
  font-family: 'Teachers', sans-serif;
}

.poppins-font {
  font-family: 'Poppins', sans-serif;
}
body {
  background-color: #f2f2f2; /* light gray or any color */
}

/* ✅ Remove all card rounding on mobile */
@media (max-width: 959px) {
  .remove-rounded-mobile {
    border-radius: 0 !important;
  }
}
</style>
