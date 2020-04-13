<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <div class="todo-list">
          <div class="todo-item todo-item--content">
            <div class="todo-item__title">Title</div>
            <div class="todo-item__description">Description</div>
          </div>
          <div class="todo-item todo-item--content">
            <div class="todo-item__title">Title</div>
            <div class="todo-item__description">Description</div>
          </div>
          <div class="todo-item todo-item--content">
            <div class="todo-item__title">Title</div>
            <div class="todo-item__description">Description</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import playground from "./playground";

export default {
  name: "App",
  components: {},
  created() {
    playground();
  }
};
</script>

<style lang="scss">
$color-red: red;
$color-white: white;
$color-grey: grey;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-container {
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }
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
