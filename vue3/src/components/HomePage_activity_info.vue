<script setup lang="ts">
const props = defineProps<{
  eventTitle: string;
  eventTime: string;
  eventLocation: string;
  organizer: string[];
  guidance: string[];
}>();
</script>

<template>

  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg col-md-6">
        <img class="img-fluid" src="/img/主視覺海報.jpg" alt="">
      </div>
      <div class="col-lg col-md-6 ">
        <h2 class="text-xl font-bold mt-1 mb-2">{{ props.eventTitle }}</h2>
        <h2 class="text-xl font-bold mt-1 mb-2">活動時間</h2>
        <h4 class="text-lg activity-info-line">
            {{ props.eventTime }}
        </h4>
        <h2 class="text-xl font-bold mt-1 mb-2">活動地點</h2>
          <h4 class="text-lg activity-info-line">
            {{ props.eventLocation }}
          </h4>
        <h2 class="text-xl font-bold mt-1 mb-2">主辦單位</h2>
        <h4 class="text-lg activity-info-line">
          <span
            v-for="(item, index) in props.organizer"
            :key="`organizer-${index}`"
            class="activity-info-item"
          >
            {{ item }}
          </span>
        </h4>
        <h2 class="text-xl font-bold mt-1 mb-2">指導單位</h2>
        <h4 class="text-lg activity-info-line">
          <span
            v-for="(item, index) in props.guidance"
            :key="`guidance-${index}`"
            class="activity-info-item"
          >
            {{ item }}
          </span>
        </h4>
      </div>
    </div>

  </div>


</template>

<style scoped>
.activity-info-line {
  max-width: 22rem;
  margin-left: auto;
  margin-right: auto;
  word-break: break-word;
}
.activity-info-item {
  display: block;
}
.activity-info-item + .activity-info-item {
  margin-top: 0.25rem;
}
</style>