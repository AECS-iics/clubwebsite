<template>
  <div>
    <!-- About Section -->
    <section class="full-width-section" style="background-color:#0d1b2a; color:white; font-family:'Poppins', sans-serif;">
      <v-container fluid class="py-16 px-8">
        <v-row align="start" justify="space-between" class = "pa-5">
          <!-- Text -->
          <v-col cols="12" md="6" style = "text-align: justify;">
            <h2  style = "color:#0175C1;;"class="text-h2 font-weight-light mb-4 title-font">
              ABOUT <span style="color:#ffb703; font-weight: bold;">AECS</span>
            </h2>
            <p>
              Created in June 2025, INTI’s AECS (Applied Engineering and Computer Science Club) aims
              to provide our club members with real hands-on experience to help them in their future
              career prospects.
            </p>
            <p>
              AECS is a space created for students in the Engineering and Computer Science pathways
              to hone and apply their skills in student led projects (such as this website you’re
              looking at right now)!
            </p>
            <p>
              If you’re someone who’s down to learn new skills, get some experience, make friends,
              and have fun; we are open to new members of any skill; beginners, experienced and
              anywhere in between.
            </p>
            <v-btn color="primary" class="mt-4">Register</v-btn>
            <div class="mt-2">
              <div style="color:#ffb703;">Interested in becoming a member? Sign up now!</div>
            </div>
          </v-col>

          <!-- Image -->
          <v-col cols="12" md="5" class="d-flex justify-center">
            <v-img
              src="https://via.placeholder.com/400x300"
              alt="Students working"
              class="rounded-lg"
              max-width="400"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Committee Section -->
    <section class="full-width-section" style="background:white; color:black; font-family:'Poppins', sans-serif;">
      <v-container fluid class="py-16 px-8">
        <h2 class="text-h4 font-weight-bold text-center mb-2 title-font">
          MEET OUR COMMITTEE <span style="color:#ffb703;">MEMBERS</span>
        </h2>
        <p class="text-center mb-10">
          None of this would be made possible without our lovely committee members who worked
          tirelessly to make this club from concept to reality!
        </p>

        <v-row justify="center" align="stretch" class="g-8">
          <v-col v-for="member in committee" :key="member.name" cols="12" sm="6" md="4" lg="3">
            <v-card elevation="2" class="pa-4 text-center">
              <v-img
                :src="member.img"
                height="250"
                width="200"
                class="mx-auto rounded-lg"
                cover
              />
              <h3 class="mt-4 text-subtitle-1 font-weight-bold title-font">{{ member.name }}</h3>
              <p class="text-body-2">{{ member.role }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teachers:wght@400;500;600;700&display=swap'
    }
  ]
})

const committee = [
  { name: "AUSTIN GAN", role: "Vice President Of Administration", img: "/images/austin.png" },
  { name: "PHONE MYINT MYAT", role: "President", img: "/images/peter.png" },
  { name: "MIN THANT KYAW", role: "Vice President Of Activities", img: "/images/thanaktih.png" }, 
  { name: "ADAM DALI", role: "Projects Officer", img: "/images/adam.png" },
  { name: "TEE KAI YO", role: "PR Officer", img: "/images/Kaiyao.png" },
  { name: "ARR MAN TUN", role: "Secretary", img: "/images/Jericho.png" },
  { name: "Committee Member 7", role: "Role Placeholder", img: "/images/hauyo.png" },
  { name: "Committee Member 8", role: "Role Placeholder", img: "/images/Yamamoto.png" } 
]
</script>

<style scoped>
.title-font {
  font-family: 'Teachers', sans-serif !important;
}
.full-width-section {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>