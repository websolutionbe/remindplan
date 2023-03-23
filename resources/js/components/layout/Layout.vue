<template>
  <div class="content">
    <main>
      <slot/>
    </main>
    <navigation />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Navigation from "@/js/components/layout/parts/Navigation.vue";

export default {
  name: "Layout",
  components: {Navigation, Header},
  data() {
    return {
      fixed: false,
    }
  },
  props: {
    title: {type: String, required: false, default: null}
  },
  computed: {
    clientOnly() {
      return typeof window !== 'undefined';
    },
  },
  mounted() {
    if (this.clientOnly) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll(event) {
      this.fixed = window.scrollY > 200;
    }
  }
}
</script>
