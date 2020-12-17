<template>
  <div class="copy-block-wrapper">
    <article class="y-pad-big wysiwig center mw-med" v-html="copy"/>
    <div v-if="debug" class="y-pad-micro">
      <raw-displayer 
        :value="{copy}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CopyBlock",
  data() {
    return {
      debug: JSON.parse(process.env.DEBUG),
    }
  },
  props: {
    copy: {
      type: String,
      default: ''
    }
  }
}
</script>