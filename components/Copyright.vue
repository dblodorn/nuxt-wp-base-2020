<template>
  <h5 class="font-a reg-size uppercase">&copy; {{thisYear}}</h5>
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