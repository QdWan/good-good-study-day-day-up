<template>
  <div>
    about
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    // app/controller/home.js下面的test方法
    const data = await $axios.$get('/test')
    console.log(data);
    return { data }
  }
}
</script>
