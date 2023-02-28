<script>
export default {

}
</script>

<template>
  <nav>
    <a href="/home">Главная</a>
    <a href="/contacts">Контакты</a>
    <a href="/gallery">Галерея</a>
  </nav>
  <router-view/>
</template>

<style>
  nav{
    display: flex;
    flex-direction: column;
  }
</style>