<template>
  <div class="project-insert-wrapper y-pad-big y-pad-bottom photo-slider">
    <client-only>
      <flickity
        ref="flickity" 
        :options="flickityOptions" 
      >
        <div 
          v-for="item in images" 
          :key="item.id"
          class="slider-image x-pad-micro"
        >
          <div class="image-sizer">
            <img class="fit-contain bezier-300" :src="item">
          </div>
        </div>
      </flickity>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "FlickityComponent",
  props: {
    images: {
      type: Array
    }
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        draggable: false,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true
      }
    }
  }
}
</script>

<style lang="css">
  .slider-image {
    width: 70vw;
    height: 80vh;
    overflow: hidden;
    position: relative;
  }
  .slider-image img {
    opacity: .75;
  }
  .slider-image.is-selected img {
    opacity: 1;
  }
  .flickity-prev-next-button {
    padding: var(--pad-micro);
    width: var(3rem);
    border-radius: calc(var(3rem) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(3rem);
    background-color: var(--white);
    color: var(--black);
    text-decoration: none;
    text-align: center;
    top: 50%!important;
  }
  .flickity-prev-next-button.previous {
    left: var(--pad-single);
  }
  .flickity-prev-next-button.next {
    right: var(--pad-single);
  }
  @media (hover: hover) {
    .flickity-prev-next-button:hover {
      background-color: var(--text-color);
    }
  }
</style>