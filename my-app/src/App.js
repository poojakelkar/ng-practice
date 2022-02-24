import { useState } from "react";
import "./index.css";

const Card = ({ title, task }) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <span>{task}</span>
        </div>
    );
};

const notesData = [
    {
        id: 1,
        title: "whar are you doing",
        task: "what task you added",
    },
    {
        id: 2,
        title: "add task name",
        task: "task activities",
    },
    {
        id: 3,
        title: "abcd",
        task: "123456",
    },
];

export default function App() {
    const [noteTitle, setnoteTitle] = useState("");
    const [notetask, setTask] = useState("");
    const [notes, setNotes] = useState(notesData);

    const notesHandler = () => {
        setNotes((prev) => [
            ...prev,
            { id: Math.random(), title: noteTitle, task: notetask },
        ]);
    };

    return (
        <div className='App'>
            <div>
                <form className='notes-form'>
                    <h2>Notes App</h2>
                    <input
                        type='text'
                        value={noteTitle}
                        onChange={(e) => setnoteTitle(e.target.value)}
                    />
                    <textarea
                        type='text'
                        value={notetask}
                        onChange={(e) => setTask(e.target.value)}
                    />
                </form>
                <button className='btn-notes' onClick={notesHandler}>
                    Add note
                </button>

                <section className='notes'>
                    {notes.map((note) => {
                        return (
                            <Card title={note.title} task={note.task}></Card>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}
