import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./component/Form";
import ListItem from "./component/ListItem";
import { toast, ToastContainer } from "react-toastify";

function App() {
  // Load initial state from local storage
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todolist");
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const [todolist, setTodolist] = useState(getInitialTodos);

  // Save todos to local storage whenever todolist changes
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  const TodoAdd = (e) => {
    e.preventDefault();
    const toName = e.target.toName.value;

    if (toName === "") {
      toast.error("Todo name cannot be empty.", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
      return;
    }

    if (!todolist.includes(toName)) {
      const finaltodoList = [...todolist, toName];
      setTodolist(finaltodoList);
      e.target.toName.value = "";
    } else {
      toast.success("Todo name already exists...", {
        position: "top-center",
        autoClose: 1000,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer autoClose={1000} theme="dark" />
      <div className="w-full min-h-screen">
        <h1 className="text-center text-[2rem] m-2">Todo List</h1>
        <div className="w-[60%] mx-auto bg-pink-800 flex flex-col gap-2 p-4 rounded-[1rem] shadow-black text-[#fff]">
          <Form TodoAdd={TodoAdd} />
          <div className="relative">
            <ul>
              {todolist.map((value, idx) => (
                <ListItem
                  key={idx}
                  value={value}
                  indexValue={idx}
                  todolist={todolist}
                  setTodolist={setTodolist}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
