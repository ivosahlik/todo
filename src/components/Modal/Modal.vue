<template>
  <div>
    <div @click="isModalOpen = true" class="app-button">Create</div>
    <div class="modal" :class="{ 'modal--is-active': isModalOpen }">
      <div class="modal-content">
        <span class="modal-close" @click="isModalOpen = false">&times;</span>
        <p>Modal Content</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false
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
  &--is-active {
    display: block;
  }
  &-close {
    color: #aaa;
    float: right;
    font-size: 25px;
    font-weight: bold;
    line-height: 8px;
    &:hover {
      cursor: pointer;
    }
  }
}

.app-button {
  background-color: #ffd906;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
}
</style>
