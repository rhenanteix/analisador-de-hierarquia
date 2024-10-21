import { execSync } from 'child_process';

describe('CLI Analyze Command', () => {
  it('should return correct analysis for depth 2', () => {
    const output = execSync('npx ts-node src/cli.ts analyze --depth 2 "Eu amo papagaios" --verbose').toString();
    
    expect(output).toContain('Frase: Eu amo papagaios');
    expect(output).toContain('Profundidade: 2');
    expect(output).toContain('Verbose: true');
  });

  it('should return error when no phrase is provided', () => {
    try {
      execSync('npx ts-node src/cli.ts analyze --depth 2 --verbose').toString();
    } catch (error: any) {
      expect(error.stdout.toString()).toContain('Erro: nenhuma frase foi fornecida.');
    }
  });
});
