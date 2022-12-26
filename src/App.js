import './App.css';

import {

  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is amazing React course" />
        <div className="container">
          <Routes>

            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/posts" element={<Posts />}>
            </Route>
            <Route exact path="/signup" element={<Signup />}>

            </Route>

          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;