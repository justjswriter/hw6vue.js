<script>
export default {
  data() {
    return {
      images: ["https://picsum.photos/500","https://picsum.photos/501","https://picsum.photos/502"
      ],
    };
  },
};
</script>

<template>
  <p>{{$route.params.id}}</p>
  <img :src="images[$route.params.id]" alt="">
</template>

<style>

</style>