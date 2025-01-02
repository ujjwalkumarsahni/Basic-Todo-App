import React from "react";
import { toast } from "react-toastify";

const ListItem = ({ value, indexValue, todolist, setTodolist }) => {
  const deleteItemp = () => {
    const finaltoDO = todolist.filter((val, idx) => idx != indexValue);
    setTodolist(finaltoDO);

    toast.warn("Item deleted!", {
      position: "top-right",
      autoClose: 400,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <li className=" text-[#fff] text-[1.5rem] mb-[.7rem] rounded-[1rem] py-[.4rem] px-2 bg-cyan-950">
        {indexValue + 1}
        {"."} {value}{" "}
        <span
          onClick={deleteItemp}
          className="absolute right-[10px] cursor-pointer hover:text-[red]"
        >
          &times;
        </span>
      </li>
    </>
  );
};

export default ListItem;
