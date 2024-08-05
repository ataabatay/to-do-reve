import SingleToDoItem from './SingleToDoItem';

export default function ActiveToDoListView({ toDos, setToDos }) {
  return (
    <section className="to-do-list-view flex flex-col-reverse text-2xl w-3/4">
      {toDos
        .filter((toDo) => toDo.status === 'active')
        .map((toDo, index) => (
          <SingleToDoItem
            key={toDo.id}
            id={toDo.id}
            color={'white'}
            text={toDo.toDo}
            toDos={toDos}
            setToDos={setToDos}
            status={toDo.status}
          />
        ))}
    </section>
  );
}
