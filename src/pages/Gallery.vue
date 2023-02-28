<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      images: [
        {
          id: 1,
          imageUrl: "https://picsum.photos/200",
        },
        {
          id: 2,
          imageUrl: "https://picsum.photos/207",
        },
        {
          id: 3,
          imageUrl: "https://picsum.photos/202",
        },
        {
          id: 5,
          imageUrl: "https://picsum.photos/307",
        }
      ],
    };
  },
};
</script>

<template>
  <p>Галерея</p>
  <vueper-slides>
  <vueper-slide
    v-for="(image) in images"
    :key="image.id"
    :content="image.imageUrl">
  </vueper-slide>
</vueper-slides>
</template>

<style>
</style>