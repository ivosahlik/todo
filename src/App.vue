<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-container--btn-create">
          <div class="app-button">Create</div>
        </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-content">Modal Content</div>
    </div>
  </div>
</template>

<script>
import playground from "./playground";
import TodoList from "@/components/Todo/TodoList";

export default {
  name: "App",
  components: { TodoList },
  data() {
    return {
      todos: [
        {
          _id: "1",
          title: "Title 1",
          description: "Description 1"
        },
        {
          _id: "2",
          title: "Title 2",
          description: "Description 2"
        },
        {
          _id: "3",
          title: "Title 3",
          description: "Description 3"
        }
      ]
    };
  },
  created() {
    playground();
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-container {
    display: flex;
    flex-direction: column;
    width: 400px;
    min-height: 400px;
    background-color: #ededed;
    border-radius: 5px;
  }
  &-container--btn-create {
    margin: 10px;
  }
}

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
}
</style>
