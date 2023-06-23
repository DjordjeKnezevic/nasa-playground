<template>
  <div class="row">
    <p>{{ loadingText }}</p>
    <img
      src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_square_medium.gif"
      width="50"
      height="50"
    />
  </div>
</template>

<script>
export default {
  name: 'LoadingIndicator',
  props: {
    loadingText: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>
