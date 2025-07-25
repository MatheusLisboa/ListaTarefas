import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-3 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        value={title}
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        type="text"
        placeholder="Digite o titulo da tarefa"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        value={description}
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md bg-white"
        type="text"
        placeholder="Digite a descrição da tarefa"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
            if(!title.trim() || !description.trim()){
                return alert("Preencha os campos!")
            }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
