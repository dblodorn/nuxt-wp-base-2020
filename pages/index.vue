<template>
  <div class="landing">
    <ul class="pad-single y-pad-top main-menu flex-row-wrap">
      <li v-for="post of data.derpy_nav" :key="post.id">
        <n-link class="lozenge-button" :to="`/work/${post.slug}`">
          <span v-html="post.title"/>
        </n-link>
      </li>
    </ul>
    <viewport-wrapper class="canvas-wrapper">
      <v-stage
        ref="stage"
        :config="configKonva"
        @dragstart="handleDragstart"
        @dragend="handleDragend"
      >
        <v-layer ref="layer">
          <v-star
            v-for="item in list"
            :key="item.id"
            :config="{
              x: item.x,
              y: item.y,
              rotation: item.rotation,
              id: item.id,
              numPoints: 10,
              innerRadius: 10,
              outerRadius: 150, fill: '#ff616b',
              opacity: 0.9,
              draggable: true,
              scaleX: dragItemId === item.id ? item.scale * 1.2 : item.scale,
              scaleY: dragItemId === item.id ? item.scale * 1.2 : item.scale,
              shadowColor: '#33ff7d',
              shadowBlur: 120,
              shadowOffsetX: dragItemId === item.id ? 15 : 5,
              shadowOffsetY: dragItemId === item.id ? 15 : 5,
              shadowOpacity: 0.6
            }"
          ></v-star>
        </v-layer>
      </v-stage>
    </viewport-wrapper>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(`${process.env.CMS_URL}derpyvision`)
      .then((res) => {
        return { data: res.data }
      })
  },
  data() {
    return {
      list: [],
      dragItemId: null
    };
  },
  computed: {
    configKonva() {
      return {
        width: this.$store.state.screen.width,
        height: this.$store.state.screen.height
      }
    }
  },
  methods: {
    handleDragstart(e) {
      // save drag element:
      this.dragItemId = e.target.id();
      // move current element to the top:
      const item = this.list.find(i => i.id === this.dragItemId);
      const index = this.list.indexOf(item);
      this.list.splice(index, 1);
      this.list.push(item);
    },
    handleDragend(e) {
      this.dragItemId = null;
    }
  },
  mounted() {
    this.$nextTick(() => {
      for (let n = 0; n < 30; n++) {
        this.list.push({
          id: Math.round(Math.random() * 10000).toString(),
          x: Math.random() * this.$store.state.screen.width,
          y: Math.random() * this.$store.state.screen.height,
          rotation: Math.random() * 180,
          scale: Math.random()
        });
      }
    })
  },
  head () {
    return {
      title: `HELLooo | ${process.env.APP_TITLE}`,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'image', name: 'image', content: `${process.env.BASE_URL}/imgs/derpy-avatar-circle.png` },
      ]
    }
  }
}
</script>

<style lang="css">
  .main-menu {
    z-index: 10;
    position: relative;
  }
  .canvas-wrapper {
    background: #ebd999;
  }
</style>
