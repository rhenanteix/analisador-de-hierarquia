import { WordAnalyzer } from './wordHierarchy';

const args = process.argv.slice(2);
const depthIndex = args.indexOf('--depth');
const verbose = args.includes('--verbose');
const phrase = args.find(arg => arg.startsWith('"'))?.replace(/"/g, '');

if (!phrase || depthIndex === -1 || !args[depthIndex + 1]) {
  console.error('Erro: parâmetros incorretos.');
  process.exit(1);
}

const depth = parseInt(args[depthIndex + 1], 10);

const analyzer = new WordAnalyzer();

const startLoad = Date.now();
const results = analyzer.analyze(phrase, depth);
const endLoad = Date.now();

if (Object.keys(results).length === 0) {
  console.log('Nenhuma correspondência encontrada.');
} else {
  for (const [key, count] of Object.entries(results)) {
    console.log(`${key} = ${count}`);
  }
}

if (verbose) {
  console.log(`Tempo de carregamento dos parâmetros: ${endLoad - startLoad}ms`);
}
