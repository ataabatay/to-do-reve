import { useState } from 'react';
import { AddToDoMarker } from '../assets/Icons';
import ProgressDisplay from './ProgressDisplay';

export default function AddToDo({ toDos, setToDos }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
    if (!e.target.value.trim()) {
      setError('A todo must be at least 1 character long.');
    } else {
      setError('');
    }
  }

  function addToDo(e) {
    e.preventDefault();
    if (inputValue.length > 0) {
      setToDos([
        ...toDos,
        {
          id: toDos.length + 1,
          toDo: inputValue,
          status: 'active',
        },
      ]);
      setInputValue('');
    } else {
      setError('A To Do must be at least 1 character long.');
    }
  }

  return (
    <form onSubmit={addToDo} action="submit" className="flex flex-col mb-4">
      <div className="input-area flex items-end gap-4">
        <input
          onChange={handleChange}
          value={inputValue}
          className="create-to-do-area bg-inherit border-b rounded border-b-white w-3/4 focus: outline-none p-4 text-3xl placeholder:text-white placeholder:opacity-40 placeholder:italic"
          placeholder="e.g. buy eggs"
        />
        <button>
          <AddToDoMarker color={'white'} size={42} />
        </button>
        <ProgressDisplay allToDos={toDos} />
      </div>
      <div className="error-message">{error && <p className="mt-4 text-sm text-red-500">{error}</p>}</div>
    </form>
  );
}
