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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.todo-container {
  width: 400px;
  min-height: 400px;
  background-color: #ededed;
  border-radius: 5px;
}

.todo-item {
  background-color: grey;
}

.todo-item--content {
  min-height: 70px;
  margin: 10px;
  padding: 10px;
  color: white;
  font-size: 23px;
  border-radius: 5px;
}

.todo-item__title {
  font-weight: bold;
}

.todo-item__description {
  font-size: 19px;
}
</style>
