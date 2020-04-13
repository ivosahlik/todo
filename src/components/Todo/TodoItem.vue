<template>
  <div class="todo-item todo-item--content">
    <div class="todo-item__title">Title</div>
    <div class="todo-item__description">Description</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles/definitions/colors.scss";

.todo {
  &-item {
    background-color: $color-grey;
    &--content {
      min-height: 70px;
      margin: 10px;
      padding: 10px;
      color: $color-white;
      font-size: 23px;
      border-radius: 5px;
    }
    &__title {
      font-weight: bold;
    }
    &__description {
      font-size: 19px;
    }
  }
}
</style>