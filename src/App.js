import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import Detail from './components/Detail';


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
