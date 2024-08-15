import React from "react"
import AddTask from "./components/AddTask"
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
  <div className="text-center">
    <h1 className="text-2xl font-bold">TODO REACT PROJECT</h1>
    <AddTask/>
  </div>
    </main>
    
  )
}
