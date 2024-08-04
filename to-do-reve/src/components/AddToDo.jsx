import { AddToDoMarker } from '../assets/Icons';

export default function AddToDo() {
  return (
    <form action="submit" className="flex items-end gap-5">
      <input
        type="text"
        className="create-to-do-area bg-inherit border-b rounded border-b-white w-3/4 focus: outline-none p-4 text-3xl placeholder:text-white placeholder:opacity-40 placeholder:italic"
        placeholder="e.g. buy eggs"
      />
      <button>
        <AddToDoMarker color={'white'} />
      </button>
    </form>
  );
}
