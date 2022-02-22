<template>
  <div class="text-3xl bg-blue-900 text-white p-5 flex">
    <div class="font-bold mr-5">
      Header
    </div>
    <div class="mr-5">|</div>
    <div class="flex gap-3 flex-grow">
      <router-link to="/" class="mr-3">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>{{count}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store?.state?.count ?? 0;
    }
  },
}
</script>