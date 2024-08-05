import AddToDo from './components/AddToDo';
import InactiveToDoListView from './components/InactiveToDoListView';
import ActiveToDoListView from './components/ActiveToDoListView';
import { useEffect, useState } from 'react';
import Placeholder from './components/Placeholder';

function App() {
  const [toDos, setToDos] = useState(() => {
    const items = localStorage.getItem('To Dos');
    return JSON.parse(items);
  });

  useEffect(() => {
    localStorage.setItem('To Dos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <>
      <main className="bg-black text-white min-h-screen flex flex-col p-20">
        <AddToDo toDos={toDos} setToDos={setToDos} />
        {toDos.length && toDos.length > 0 ? (
          <>
            <ActiveToDoListView toDos={toDos} setToDos={setToDos} />
            <InactiveToDoListView toDos={toDos} setToDos={setToDos} />
          </>
        ) : (
          <Placeholder />
        )}
      </main>
    </>
  );
}

export default App;
