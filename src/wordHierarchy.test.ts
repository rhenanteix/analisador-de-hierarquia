// src/wordHierarchy.test.ts

import { execSync } from 'child_process';

describe('CLI Analyze Command', () => {
  it('should return error when no phrase is provided', () => {
    try {
      // Executando o comando sem frase
      execSync('npx ts-node src/cli.ts analyze --depth 2 --verbose').toString();
    } catch (error: any) {
      // Verifica se o erro contém a mensagem esperada
      expect(error.stderr.toString()).toContain('Erro: nenhuma frase foi fornecida.');
    }
  });
});
