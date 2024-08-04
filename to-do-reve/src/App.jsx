import AddToDo from './components/AddToDo';
import InactiveToDoListView from './components/InactiveToDoListView';
import ActiveToDoListView from './components/ActiveToDoListView';
import ToDoListView from './components/ActiveToDoListView';

function App() {
  return (
    <>
      <main className="bg-black text-white h-screen flex flex-col p-20 gap-8">
        <AddToDo />
        <ActiveToDoListView />
        <InactiveToDoListView />
      </main>
    </>
  );
}

export default App;
