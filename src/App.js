import './App.css';
import Contacts from './components/Contacts';


function App() {
    return (
        <div className="container">
            <h1 className="subject">Phone Book</h1>
            <div>
                <Contacts/>
            </div>
        </div>
    );
}

export default App;
