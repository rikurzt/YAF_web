<template>
  <div class="album py-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 align-items-start">
        <CardItem v-for="(card, index) in cards" :key="index" :card="card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';  // Use type-only import
import CardItem from "./Club_CardItem.vue";

// Define the type of card if necessary, for example:
interface Card {
  // Define the structure of a card object here
  title: string;
  name: string;
  description: string;
  src: string;
  tag: string;
  number: string;
  url?: string;  // 可選的網址欄位
}

defineProps({
  cards: {
    type: Array as PropType<Card[]>,  // Explicitly type the cards prop as an array of Card objects
    required: true
  }
})
</script>
