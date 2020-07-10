<template>
  <div v-if="slides.length" class="full-width-slider">
    <client-only>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, i) in slides" v-bind:key="('slide-show-' + i)">
          <div class="gallery-slide">
            <div class="gallery-slide-inner">
              <img :src="item">
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"/>
        <div class="control-right" slot="button-next">
          <h4 class="reg-size pink-hover">NEXT</h4>
        </div>
        <div class="control-left" slot="button-prev">
          <h4 class="reg-size pink-hover">PREV</h4>
        </div>
      </swiper>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {
    slides: {
      type: Array,
      default: [],
      useDefaultForNull: true
    }
  },
  mounted() {
    this.slides.length && this.$nextTick(() => {
      this.$refs.mySwiper.swiper.autoplay.start()
    })
  },
  data () {
    return {
      swiper: null,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.control-right',
          prevEl: '.control-left'
        },
        autoplay: {
          disableOnInteraction: true,
          delay: 5000
        },
        speed: 500,
        allowTouchMove: false,
        loop: true,
        effect: 'slide',
        fadeEffect: {
          crossFade: true
        },
      }
    }
  }
}
</script>

<style>
.full-width-slider {
  width: 100%;
  height: 100%;
  zoom: 1;
  position: relative;
}
.swiper-slide {
  width: 100%;
  height: 0;
  padding-bottom: calc(56.25% + 3rem);
  overflow-y: visible;
  position: relative;
}
.gallery-slide {
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: absolute;
}
.gallery-slide-inner {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.swiper-container {
  height: 100%;
}
.swiper-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 3rem;
  position: absolute;
  height: 3rem;
  bottom: 0!important;
  left: 0;
  width: 100%;
  padding-top: .5rem;
}
.swiper-pagination-bullet {
  border: 1px solid var(--black);
  background-color: transparent;
  width: calc(var(--base-unit) / 1.25);
  height: calc(var(--base-unit) / 1.25);
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: var(--black);
  opacity: 1;
}
.control-right,
.control-left {
  position: absolute;
  z-index: 100;
  width: 10rem;
  bottom: 0rem;
}
.full-width-slider .control-left {
  left: 0;
  text-align: left;
}
.full-width-slider .control-right {
  right: 0;
  text-align: right;
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>