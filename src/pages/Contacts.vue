<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Saniya",
        },
        {
          id: 2,
          name: "Zhanerke",
        },
        {
          id: 3,
          name: "Alisher",
        },
        {
          id: 4,
          name: "Aituar",
        },
      ],
    };
  },
};
</script>

<template>
  <p>Контакты</p>
  <ul>
    <li v-for="user of users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>

<style></style>
