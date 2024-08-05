import { useState } from 'react';

export default function ProgressDisplay({ allToDos }) {
  return (
    <>
      <div className="progress-display ml-auto opacity-40">
        {allToDos.filter((toDo) => toDo.status === 'done').length} / {allToDos.length}
      </div>
    </>
  );
}
