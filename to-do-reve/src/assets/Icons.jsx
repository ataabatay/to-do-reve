export function CircleMarker({ color }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill={color}
        class="bi bi-circle-fill"
        viewBox="0 0 16 16"
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
    </>
  );
}

export function AddToDoMarker({ color }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill={color}
        class="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
        />
      </svg>
    </>
  );
}

export function CompleteToDo({ color }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={color}
        class="bi bi-check2"
        viewBox="0 0 16 16"
      >
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
      </svg>
    </>
  );
}
