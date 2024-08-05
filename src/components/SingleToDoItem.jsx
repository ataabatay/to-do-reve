import TextTruncate from 'react-text-truncate';
import { AddToDoMarker, CircleMarker, CompleteToDo, RemoveToDoMarker } from '../assets/Icons';
import { useState } from 'react';

export default function SingleToDoItem({ toDos, setToDos, id, status, color, text }) {
  const [hovering, setHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  function showIcons() {
    setHovering(true);
  }

  function hideIcons() {
    setHovering(false);
  }

  function deleteToDo() {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  function completeToDo() {
    setToDos(toDos.map((toDo) => (toDo.id === id ? { ...toDo, status: 'done' } : toDo)));
  }

  function moveToDoBackToDoList() {
    setToDos(toDos.map((toDo) => (toDo.id === id ? { ...toDo, status: 'active' } : toDo)));
  }

  function toggleEditMode() {
    setIsEditing(true);
  }

  function handleEditChange(e) {
    setEditText(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (editText.trim().length > 0) {
      setToDos(toDos.map((toDo) => (toDo.id === id ? { ...toDo, toDo: editText } : toDo)));
      setIsEditing(false);
    } else {
      setToDos(toDos.filter((toDo) => toDo.id !== id));
    }
  }

  return (
    <>
      <div
        className="single-to-do flex gap-4 items-center px-8 py-4 hover:cursor-text"
        onMouseEnter={showIcons}
        onMouseLeave={hideIcons}
      >
        <div className="bullet-marker">
          <CircleMarker color={color} />
        </div>
        {isEditing ? (
          <form onSubmit={handleEditSubmit}>
            <input
              type="text"
              value={editText}
              onChange={handleEditChange}
              onBlur={handleEditSubmit}
              autoFocus
              className="bg-transparent focus:outline-none"
            />
          </form>
        ) : (
          <TextTruncate line={1} element="span" truncateText="..." text={text} onClick={toggleEditMode} />
        )}
        {hovering && (
          <div className="icons ml-4 flex gap-4">
            {status === 'active' && (
              <button className="hover:cursor-pointer" onClick={completeToDo}>
                <CompleteToDo />
              </button>
            )}
            {status === 'done' && (
              <button className="hover:cursor-pointer" onClick={moveToDoBackToDoList}>
                <AddToDoMarker color={'currentColor'} size={32} />
              </button>
            )}
            <button className="hover:cursor-pointer" onClick={deleteToDo}>
              <RemoveToDoMarker />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
