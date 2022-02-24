import "./index.css";

export default function App() {
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
            title: "whar are you doing",
            task: "what task you added",
        },
        {
            title: "add task name",
            task: "task activities",
        },
        {
            title: "abcd",
            task: "123456",
        },
    ];

    return (
        <div className='App'>
            <div>
                <form className='notes-form'>
                    <h2>Notes App</h2>
                    <input />
                    <textarea />
                    <button className='btn-notes'>Add note</button>
                </form>

                <section className='notes'>
                    {notesData.map((note) => {
                        return (
                            <Card title={note.title} task={note.task}></Card>
                        );
                    })}
                </section>
            </div>
        </div>
    );
}
