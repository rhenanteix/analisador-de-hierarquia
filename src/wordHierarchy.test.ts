import { WordAnalyzer } from './wordHierarchy';

test('analyze phrase at depth 2', () => {
  const analyzer = new WordAnalyzer();
  const result = analyzer.analyze("Eu amo papagaios", 2);
  expect(result).toEqual({ "Pássaros": 1 });
});

test('analyze phrase at depth 3', () => {
  const analyzer = new WordAnalyzer();
  const result = analyzer.analyze("Eu vi gorilas e papagaios", 3);
  expect(result).toEqual({ "Primatas": 1, "Pássaros": 1 });
});
