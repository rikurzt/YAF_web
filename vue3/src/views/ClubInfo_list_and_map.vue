<script setup lang="ts">

import ContentBlock from "../components/ContentBlock.vue";
import Gallary from '../components/Gallary.vue'



const cardData:any = [
  {
    title: 'Card 1',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 2',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 3',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 1',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 2',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 3',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 1',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 2',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 3',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 1',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 2',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
  {
    title: 'Card 3',
    src: '/img/logo.jpg',
    name:'攤位名稱',
    description: '這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述這是攤位描述',
    tag: '#tag1',
    number: 'A1',

  },
]
</script>

<template>
  <ContentBlock title="參展社團" :content="Gallary" :isComponent="true" :component-props="{cards: cardData}" :disable="true" :force-visible="true"/>

</template>

<style scoped>

</style>