import { useState } from "react";
import Entry from "./Entry";
import ItemsList from "./ItemsList";

export default function MainTodo() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          📝 لیست کارها
        </h1>
        <Entry />
        <ItemsList />
      </div>
    </div>
  );
}
