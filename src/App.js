import React from 'react';
import FolderTree from './components/FolderTree';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Folder/File Tree</h1>
      <div className='files'>
      <FolderTree />
      </div>
    </div>
  );
}

export default App;
