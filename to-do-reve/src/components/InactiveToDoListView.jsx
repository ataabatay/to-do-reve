import SingleToDoItem from './SingleToDoItem';

export default function InactiveToDoListView({ toDos, setToDos }) {
  return (
    <section className="inactive-to-do-list-view text-stone-500 italic flex flex-col text-2xl w-3/4">
      {toDos
        .filter((toDo) => toDo.status === 'done')
        .map((toDo) => (
          <SingleToDoItem
            key={toDo.id}
            id={toDo.id}
            color={'rgb(120 113 108)'}
            text={toDo.toDo}
            toDos={toDos}
            setToDos={setToDos}
            status={toDo.status}
          />
        ))}
    </section>
  );
}
