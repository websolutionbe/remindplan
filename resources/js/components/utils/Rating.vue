<template>
  <div class="rating">
    {{ __t('app.rating') }}
    <svg-star v-for="i in 5" :key="`star_${i}`"/>
  </div>
</template>

<script>
import SvgStar from "@/svg/star.svg";

export default {
  name: "Rating",
  components: {SvgStar}
}
</script>
