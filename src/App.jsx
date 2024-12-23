import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintasks, setmaintasks] = useState([]);

  const sumbithandler = (e) => {
    e.preventDefault();

    // Ensure the time is captured correctly
    const currentTime = new Date().toLocaleTimeString();

    // Add time along with the task title and description
    setmaintasks([...maintasks, { title, desc, time: currentTime }]);
    setTitle("");
    setDesc("");
  };

  const deletehandler = (i) => {
    let copytask = [...maintasks];
    copytask.splice(i, 1);
    setmaintasks(copytask);
  };

  let rendertasks = <h2>no tasks available</h2>;

  if (maintasks.length > 0) {
    rendertasks = maintasks.map((t, i) => {
      return (
        <li className="flex items-center justify-between" key={i}>
          <div className="flex flex-col bg-white p-4 shadow rounded mr-4 mb-3">
            <h5 className="text-2xl font-semibold mb-2">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
            <span className="text-sm text-gray-500">Added at: {t.time}</span> {/* Display the time */}
          </div>
          <button
            onClick={() => deletehandler(i)}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-xl font-bold text-center">
        Ishan's To-Do List
      </h1>

      <form onSubmit={sumbithandler}>
        <input
          type="text"
          className="text-2xl border-black-800 border-2 m-4 p-5 h-2"
          placeholder="Enter your tasks"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="text-2xl border-black-800 border-2 m-4 p-5 h-2"
          placeholder="Enter task description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="bg-black text-white p-2 text-xl font-bold rounded mx-4">
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{rendertasks}</ul>
      </div>
    </>
  );
}

export default App;
