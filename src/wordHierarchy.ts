import * as fs from 'fs';
import * as path from 'path';

interface WordHierarchy {
  [key: string]: any;
}

export class WordAnalyzer {
  private hierarchy: WordHierarchy;

  constructor() {
    const filePath = path.resolve(__dirname, '../dicts/hierarchy.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.hierarchy = JSON.parse(data);
  }

  public analyze(phrase: string, depth: number): Record<string, number> {
    const words = phrase.split(/\s+/);
    const results: Record<string, number> = {};

    this.searchAtDepth(this.hierarchy, depth, words, results, 1);
    return results;
  }

  private searchAtDepth(
    node: WordHierarchy,
    targetDepth: number,
    words: string[],
    results: Record<string, number>,
    currentDepth: number
  ): void {
    if (currentDepth > targetDepth) return;

    for (const key in node) {
      if (currentDepth === targetDepth && words.includes(key)) {
        results[key] = (results[key] || 0) + 1;
      }

      if (typeof node[key] === 'object') {
        this.searchAtDepth(node[key], targetDepth, words, results, currentDepth + 1);
      }
    }
  }
}
