<template>
  <div class="displayer">
    <p v-if="title" >DATA:: {{ title }}</p>
    <pre>{{ valueString }}</pre>
  </div>
</template>

<script>

const props = {
  name: "RawDisplayer",
  title: {
    required: false,
    type: String
  },
  value: {
    required: true
  }
};

export default {
  props,
  computed: {
    valueString() {
      return JSON.stringify(this.value, null, 2);
    }
  }
};

</script>
