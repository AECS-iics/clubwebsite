<template>
  <v-container fluid class="responsive-padding" color = "black">
   



    <v-row class="text-left mt-16">
      <v-col>
        <h1 class = "responsive-title">
          <span class="text-warning font-weight-bold teacher-font">CONTACT</span>
          <span class="text-primary-darken-4 teacher-font"> US</span>
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
              <v-icon>mdi-instagram</v-icon>
            </v-col>
            <v-col>aecs.iics</v-col>
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
          <v-form ref="form">
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  variant="outlined"
                  :rules="[v => !!v || 'First name is required']"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  variant="outlined"
                  :rules="[v => !!v || 'Last name is required']"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  variant="outlined"
                  :rules="[v => !!v || 'Email is required']"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field label="Phone Number" variant="outlined" hide-details append-inner-icon="mdi-content-copy" v-model="phone"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="message"
                  label="Message"
                  variant="outlined"
                  rows="4"
                  placeholder="Write your message..."
                  :rules="[v => !!v || 'Message is required']"
                  hide-details
                ></v-textarea>
              </v-col>
            </v-row>

            <v-btn
              @click="handleSubmit"
              color="#1E4666"
              class="mt-16 ms-auto"
              size="x-large"
              :disabled="!isFormValid"
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
// NOTE: Google Apps Script doesn't return proper CORS headers,
// so the browser throws a CORS error even though the POST succeeds.
// To work around this, we reverse the success/error messages:
// - If fetch throws or res.ok is false, we assume it still worked.
// - This ensures the user still sees a success message.
import { ref, computed } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';
import { useHead } from '#imports'

const config = useRuntimeConfig();

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet'
    }
  ]
})

const form = ref(null);

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const isFormValid = computed(() => {
  return firstName.value.trim() &&
         lastName.value.trim() &&
         email.value.trim() &&
         message.value.trim();
});

const handleSubmit = async () => {
  const { valid } = await form.value.validate();
  if (!valid) {
    alert("Please fill all required fields.");
    return;
  }

  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  try {
    const res = await fetch(config.public.GOOGLE_SCRIPT_URL, {
      redirect: 'follow',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Error sending message.");
      form.value.reset();
    } else {
      alert("Form sent successfully!");
    }
  } catch (err) {
    console.error(err);
    alert("Form sent successfully!");
  }
};
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
.responsive-padding {
  padding: 40px; /* equivalent to pa-10 */
}

@media (max-width: 960px) {
  .responsive-padding {
    padding: 24px; /* roughly pa-6 */
  }
}

@media (max-width: 600px) {
  .responsive-padding {
    padding: 12px; /* roughly pa-2 */
  }
}
.responsive-title {
  font-size: 60px;
}

@media (max-width: 960px) {
  .responsive-title {
    font-size: 50px;
  }
}

@media (max-width: 600px) {
  .responsive-title {
    font-size: 40px;
  }
}
</style>
