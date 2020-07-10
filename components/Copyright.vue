<template>
  <h5 class="white font-a link reg-size uppercase">&copy; {{thisYear}}</h5>
</template>

<script>
export default {
  computed: {
    thisYear() {
      const year = new Date()
      return `${year.getFullYear()} ${process.env.APP_TITLE}`
    }
  }
}
</script>