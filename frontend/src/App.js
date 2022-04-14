import Edit from './todolist/edit';
import './App.css';
import Tabla from './todolist/tabla';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>ToDoList</h1>
      </header>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Tabla/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
