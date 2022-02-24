import "./index.css";

export default function App() {
    const Card = ({ studentName, devRoute }) => {
        return (
            <div className='card'>
                <h2>{studentName}</h2>
                <span>{devRoute}</span>
            </div>
        );
    };

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
                    <Card studentName='pooja' devRoute='Adv front end' />
                    <Card studentName='neha' devRoute='Adv full stack' />
                    <Card studentName='priti' devRoute='front end' />
                </section>
            </div>
        </div>
    );
}
