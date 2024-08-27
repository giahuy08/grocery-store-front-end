<template>
    <div>
        <h1>Home page</h1>
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
        <Home />
        <div class="padding-container">
          <div class="flex justify-between introduction-card-list">
            <IntroductionCard 
              v-for="introCard in listIntroductionCard"
              :key="introCard.id"
              :introductionCard="introCard"
            />
          </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Home from '@/components/home/Home.vue'
import IntroductionCard from '@/components/introduction-card/IntroductionCard.vue'
import { ref } from 'vue';

const listIntroductionCard = ref([
  { 
    id: 1, 
    title: 'Free delivery over $50', 
    content: 'Shop $50 product and get free delivery anywhre.', 
    badgeText: 'Free delivery', 
    badgeStyle: 'orange-badge', 
    btnText: 'Shop Now', 
    imgUrl: 'src/assets/images/promote-man-intro-card.png',
    bgColor: 'card-bg-orange'
  },
  { 
    id: 2, 
    title: 'Organic Food', 
    content: 'Save up to 60% off on your first order', 
    badgeText: '60% off', 
    badgeStyle: 'green-badge', 
    btnText: 'Order Now', 
    imgUrl: 'src/assets/images/organic-food-intro-card.png',
    bgColor: 'card-bg-green'
  },
])
</script>
<style>
  .padding-container {
    padding: 0 120px;
  }
  .introduction-card-list {
    width: 100%;
  }
</style>