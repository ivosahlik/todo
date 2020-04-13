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
    <modal />
  </div>
</template>

<script>
import playground from "./playground";
import TodoList from "@/components/Todo/TodoList";
import Modal from "@/components/Modal/Modal";

export default {
  name: "App",
  components: {
    TodoList,
    Modal
  },
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
</style>
