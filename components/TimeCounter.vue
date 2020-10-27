<template>
  <div id="time-wrapper" class="font-b uppercase flex-row">
    <div v-if="isDesktop" class="time flex-center-vert">
      <span>{{date}}&nbsp;•&nbsp;</span>
    </div>
    <div class="time flex-center-vert">
      <div class="timezone">
        <span>{{time}} {{tz}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment-timezone'

export default {
  name: 'TimeCounter',
  data() {
    return {
      time: null,
      date: null,
      tz: null,
      timeInterval: null
    }
  },
  mounted() {
    this.setTime()
  },
  methods: {
    setTime() {
      const timestamp = moment().unix()
      console.log(timestamp)
      const Zone = moment.tz.guess()
      const tzguess = moment.tz.zone(Zone)
      this.tz = tzguess.abbr(timestamp)
      this.timeInterval = setInterval(() => {
        if (this.width >= this.$global.screens.lg ) {
          this.date = moment().format('ddd MMM D')
          this.time = moment().format('h:mm:ss')
        } else {
          this.time = moment().format('L | h:mm:ss')
        }
      }, 100)
    }
  },
  computed: {
    isDesktop() {
      return this.width >= this.$global.screens.lg ? true : false
    },
    ...mapState({
      width: state => state.screen.width
    })
  }
}
</script>

<style>
.time {
  font-size: var(--micro-size);
  padding-top: .25rem;
  position: relative;
  height: 100%;
}
@media (--lg) {
  .time {
    font-size: var(--sm-size);
  }
  .timezone {
    display: flex;
    justify-content: center;
  }
}
</style>