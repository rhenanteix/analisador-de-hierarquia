import React from 'react';
import './App.css';
import HierarchyBuilder from './compnents/HierarchyBuilder';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicativo de Hierarquia de Palavras</h1>
      </header>
      <main>
        <HierarchyBuilder />
      </main>
    </div>
  );
}

export default App;
