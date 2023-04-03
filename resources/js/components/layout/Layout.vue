<template>
  <div class="content">
    <main>
      <slot/>
    </main>
    <navigation />
      <svg width="10" height="10" viewBox="0 0 10 10">
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
              <path
                  fill="red"
                  stroke="none"
                  d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
              />
          </clipPath>
      </svg>
      <svg width="20" height="10" viewBox="0 0 200 200">
          <clipPath id="squircleClipButton" clipPathUnits="objectBoundingBox">

          </clipPath>
      </svg>
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
