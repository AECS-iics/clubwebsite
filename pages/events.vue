<template>
  <!-- ====================
       MAIN CONTAINER
       ==================== -->
  <div class="bg-gray-50 min-h-screen">
    
    <!-- ====================
         HERO SECTION / HEADER
         Uses: Vuetify v-container for layout, TailwindCSS for colors/spacing
         ==================== -->
    <div class="bg-blue-600 text-black">
      <v-container class="py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          MEMBER <span style = "color: #f9a825;">PROJECTS</span>
        </h1>
        <p class="text-xl text-blue-100 max-w-3xl">
          Discover innovative and inspiring creations built by our talented members. From engineering marvels and cutting-edge web applications to sustainable solutions and tech innovations, explore the projects that push boundaries, solve real-world problems, and shape the future of technology and design.
        </p>
      </v-container>
    </div>

    <v-container class="pb-12 pt-2">
      
      <!-- ====================
           SEARCH BAR COMPONENT
           Uses: Vuetify v-text-field with prepend icon
           ==================== -->
      <div class="mb-8">
        <v-text-field
          v-model="searchQuery"
          placeholder="Search projects by name or description..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          class="max-w-2xl"
          density="comfortable"
        ></v-text-field>
      </div>

      <!-- ====================
           FILTER BUTTONS (CATEGORIES)
           Uses: Vuetify v-chip-group for button group functionality
           ==================== -->
      <div class="mb-12">
        <div class="flex items-center gap-2 mb-4">
          <v-icon>mdi-filter</v-icon>
          <h2 class="text-lg font-semibold text-gray-700">Filter by Category</h2>
        </div>
        
        <v-chip-group
          v-model="selectedCategory"
          mandatory
          selected-class="bg-blue-600 text-white"
        >
          <v-chip
            v-for="category in categories"
            :key="category"
            :value="category"
            class="px-6 py-2"
            variant="outlined"
          >
            {{ category }}
          </v-chip>
        </v-chip-group>
      </div>

      <!-- ====================
           PROJECT CARDS GRID
           Uses: Vuetify v-row and v-col for responsive grid
           ==================== -->
      <v-row>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          cols="12"
          md="6"
          lg="4"
        >
          <!-- ====================
               INDIVIDUAL PROJECT CARD
               Uses: Vuetify v-card component
               ==================== -->
          <v-card height = "500" class="h-full hover:shadow-2xl transition-shadow duration-300">
            
            <!-- ====================
                 PROJECT IMAGE/PHOTO
                 Uses: Vuetify v-img for optimized image loading
                 ==================== -->
            <div class="relative">
              <v-img
                :src="project.image"
                :alt="project.title"
                height="200"
                cover
                class="hover:scale-105 transition-transform duration-300"
              ></v-img>
              
              <!-- Status Badge - positioned absolutely over image -->
              <v-chip
                :color="project.status === 'Completed' ? 'green' : 'yellow'"
                class="absolute mt-4 ml-4"
                size="small"
              >
                {{ project.status }}
              </v-chip>
            </div>

            <!-- ====================
                 PROJECT CONTENT SECTION
                 Uses: Vuetify v-card-text for content area
                 ==================== -->
            <v-card-text class="pb-0">
              
              <!-- Category Label - uses orange color (secondary) -->
              <v-chip
                color="orange"
                size="small"
                class="mb-3"
              >
                {{ project.category }}
              </v-chip>

              <!-- Project Title -->
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                {{ project.title }}
              </h3>

              <!-- Project Description -->
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ project.description }}
              </p>

              <!-- ====================
                   PROJECT METADATA (Date & Team)
                   Uses: Vuetify v-icon for icons
                   ==================== -->
              <div class="space-y-2 mb-4">
                <!-- Date -->
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <v-icon size="small">mdi-calendar</v-icon>
                  <span>&nbsp{{ project.date }}</span>
                </div>

                <!-- Team Members Count -->
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <v-icon size="small">mdi-account-group</v-icon>
                  <span>&nbsp{{ project.team.length }} team members</span>
                </div>
              </div>
            </v-card-text>
          
          </v-card>
        </v-col>
      </v-row>

      <!-- ====================
           NO RESULTS MESSAGE
           Displayed when filters return no projects
           ==================== -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16">
        <p class="text-xl text-gray-500">
          No projects found matching your criteria.
        </p>
      </div>

     
    </v-container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useHead } from '#imports'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Teachers:wght@400;500;600;700&display=swap'
    }
  ]
})

// ====================
// COLOR SCHEME NOTES
// ====================
// Primary: Blue (blue-600, blue-darken-1) - used in header, buttons, active chips
// Secondary: Orange - used for category badges and CTA button
// Background: Gray-50 - used for page background
// Cards: White (default v-card background)

// ====================
// STATE MANAGEMENT
// Uses Vue 3 Composition API with ref()
// ====================
const selectedCategory = ref('All')
const searchQuery = ref('')

// ====================
// CATEGORIES FOR FILTERING
// ====================
const categories = [
  'All',
  'Web Development',
  'Engineering',
  'Environmental'
]

// ====================
// PROJECT DATA
// This would typically come from an API call or database
// ====================
// Follow this format to add future projects into projectsData
// {
//     id: 1,
//     title: "Club Website",
//     category: "Web Development",
//     description: "A club website featuring a home page, projects page, and contact us page showcases the club’s mission, highlights member projects and achievements, and provides an easy way for visitors to get in touch or join the community.",
//     image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=500&fit=crop",
//     team: ["1", "2", "3", "4"], 
//     date: "Summer 2025",
//     status: "Completed"
//   },
const projectsData = [
  {
    id: 1,
    title: "Club Website",
    category: "Web Development",
    description: "A club website featuring a home page, projects page, and contact us page showcases the club’s mission, highlights member projects and achievements, and provides an easy way for visitors to get in touch or join the community.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=500&fit=crop",
    team: ["1", "2", "3", "4"], // I don't know where the names of the teams will be used but to determine team member count we are using the size of this array so i wont change that. - Adam Dali
    date: "Summer 2025",
    status: "Completed"
  },
  {
    id: 2,
    title: "3D Filament Maker",
    category: "Environmental",
    description: "Machine that converts plastic waste into usable 3D filament designed and built by our members",
    image: "images/filament.jpeg",
    team: ["Sarah Williams", "Mohammed Ali", "Counting Purposes", "Counting Purposes 2", "Counting Purposes 3"],
    date: "Summer 2025",
    status: "Completed"
  },
  {
    id: 3,
    title: "Don't Lift Automedia blog",
    category: "Web Development",
    description: "A full-stack project to develop a full functional blog webpage.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800&q=80",
    team: ["David Park", "Emily Rodriguez", "Kevin Zhang", "Lisa Thompson", "Counting purposes", "Counting purposes", "Counting purposes", "Counting purposes", "Counting purposes", "Counting purposes",],
    date: "Fall 2025",
    status: "In progress"
  },
  {
    id: 4,
    title: "Rocket Project",
    category: "Engineering",
    description: "This project aims to design, build, and test a rocket to reach a legal height of 200m, focusing on deep diving into rocket engineering and developing new skills in simulation, calculations, and self-learning.",
    image: "images/rocket.jpg",
    team: ["1", "2", "3", "4" , "4" , "4" , "4" , "4" , "4" , "4" , "4" , "4" , "4", "4", "4"], 
    date: "Fall 2025",
    status: "In progress"
  },
 
]

// ====================
// FILTERING LOGIC
// Uses Vue 3 computed property for reactive filtering
// Filters based on: selected category AND search query
// ====================
const filteredProjects = computed(() => {
  return projectsData.filter(project => {
    const matchesCategory = selectedCategory.value === 'All' || project.category === selectedCategory.value
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})
</script>

<style scoped>
/* ====================
   CUSTOM STYLES
   Additional CSS for effects not covered by Tailwind/Vuetify
   ==================== */

/* Limit description text to 3 lines with ellipsis */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions for hover effects */
.transition-shadow {
  transition: box-shadow 0.3s ease;
}

.transition-transform {
  transition: transform 0.3s ease;
}

/* Hover effect for images - slight zoom */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

/* Hover effect for cards - enhanced shadow */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
/* ====================
   FONT FAMILY RULES
   ==================== */
h1, h2, h3, h4, h5, h6 {
  font-family: "Teachers", sans-serif;
}

p, span, div, a, li, button, input, textarea {
  font-family: "Poppins", sans-serif;
}
</style>