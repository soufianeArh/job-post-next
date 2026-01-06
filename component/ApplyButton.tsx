"use client";

export default async function ApplyButton() {
  function applyHandle() {
    console.log("to be applied");
  }
  return (
    <button className="text-green-600" onClick={applyHandle}>
      APPLY
    </button>
  );
}
