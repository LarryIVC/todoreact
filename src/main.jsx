import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from '@/components/TodoApp';
// import Navbar from './components/Navbar';
import '@/styles/App.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <TodoApp />
  </React.StrictMode>,
)
