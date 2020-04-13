<template>
  <div class="modal" :class="{ 'modal__is-active': isActive }">
    <div class="modal-content">Modal Content</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  &-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 25px;
    width: 80%;
    border: 1px solid #888;
  }
  &__is-active {
    display: block;
  }
}
</style>
