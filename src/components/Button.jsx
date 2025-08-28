import React from "react";

export default function Button({ className, name, type, onClick }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {name}
    </button>
  );
}
