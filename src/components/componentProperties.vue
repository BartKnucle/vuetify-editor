<template>
  <div>
    {{ node }}
  </div>  
</template>
<script>
export default {
  props: {
    node: {
      type: Object,
      required: true
    }
  }
}
</script>
