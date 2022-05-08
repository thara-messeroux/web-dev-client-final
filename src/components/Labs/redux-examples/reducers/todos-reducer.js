const data = [
  {
    _id: "123",
    do: "Accelerate the world's transition to sustainable energy",
    done: false,
  },
  {
    _id: "234",
    do: "Reduce space transportation costs to become a spacefaring civilization",
    done: false,
  },
];

const TodosReducer = (state = data, action) => {
    switch (action.type) {
      case "update-todo":
        const newTodos = state.map((todo) => {
          const newTodo = todo._id === action.todo._id ? action.todo : todo;
          console.log(newTodo);
          return newTodo;
        });
        return newTodos;

      case "create-todo":
        return [...state, action.todo];
      case "delete-todo":
        return state.filter((todo) => todo !== action.todo);
      default:
        return state;
    }
};

export default TodosReducer;
