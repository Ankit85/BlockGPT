import React from "react";

export default function Chrip({ title }) {
  return (
    <div className="bg-indigo-500 text-sm w-fit h-fit rounded-lg p-3">
      <a href="#">{title}</a>
    </div>
  );
}
