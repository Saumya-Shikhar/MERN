import './App.css';
import Nav from './first_react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class='app'>
      <Nav/>
      <Routes>
        <Route path="/" element={
          <h1>This is Home Page</h1>
        } />
        <Route path="/signup" element={
        <h1>This is Registration Page</h1>
        } />
        <Route path="/signin" element={
        <h1>This is Login Page</h1>
        } />
      </Routes>
    </div>
  );
}

export default App;
