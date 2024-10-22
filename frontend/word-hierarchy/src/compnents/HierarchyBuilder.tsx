import React, { useState } from 'react';

interface WordNode {
  name: string;
  children?: WordNode[];
}

const HierarchyBuilder: React.FC = () => {
  const [hierarchy, setHierarchy] = useState<WordNode[]>([]);
  const [word, setWord] = useState('');
  const [parentIndex, setParentIndex] = useState<number | null>(null);

  const addWord = () => {
    if (word.trim() === '') return;

    if (parentIndex === null) {
      setHierarchy([...hierarchy, { name: word, children: [] }]);
    } else {
      const newHierarchy = [...hierarchy];
      newHierarchy[parentIndex].children!.push({ name: word, children: [] });
      setHierarchy(newHierarchy);
    }

    setWord('');
    setParentIndex(null);
  };

  const exportJSON = () => {
    const jsonContent = JSON.stringify(hierarchy, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'hierarchy.json';
    link.click();
  };

  return (
    <div>
      <h2>Construtor de Hierarquia de Palavras</h2>
      <input
        type="text"
        placeholder="Digite a palavra"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <select
        onChange={(e) => setParentIndex(e.target.value === '' ? null : Number(e.target.value))}
        value={parentIndex ?? ''}
      >
        <option value="">Nível Superior</option>
        {hierarchy.map((node, index) => (
          <option key={index} value={index}>
            {node.name}
          </option>
        ))}
      </select>
      <button onClick={addWord}>Adicionar Palavra</button>

      <div>
        <h3>Estrutura da Hierarquia</h3>
        <pre>{JSON.stringify(hierarchy, null, 2)}</pre>
      </div>

      <button onClick={exportJSON}>Salvar como JSON</button>
    </div>
  );
};

export default HierarchyBuilder;
