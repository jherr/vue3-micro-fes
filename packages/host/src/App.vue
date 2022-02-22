<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div class="mt-10">Count: {{count}}</div>
    <div>
      <button v-on:click="addOne"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >Add One</button>
    </div>
    <div className="mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

const Header = defineAsyncComponent(() => import("remote/Header"));

export default {
  components: {
    Header
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    addOne() {
      this.$store.commit('addOne');
    }
  }
}
</script>