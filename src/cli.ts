import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'analyze [phrase]',
    'Analisar a frase fornecida',
    (yargs) => {
      return yargs
        .positional('phrase', {
          describe: 'Frase a ser analisada',
          type: 'string',
        })
        .option('depth', {
          alias: 'd',
          type: 'number',
          description: 'Nível de profundidade da árvore',
          demandOption: true,
        })
        .option('verbose', {
          alias: 'v',
          type: 'boolean',
          description: 'Mostra informações detalhadas',
          default: false,
        });
    },
    (argv) => {
      if (!argv.phrase) {
        console.error('Erro: nenhuma frase foi fornecida.');
        process.exit(1);
      }

      const phrase = argv.phrase as string;
      const depth = argv.depth as number;
      const verbose = argv.verbose as boolean;

      console.log(`Frase: ${phrase}`);
      console.log(`Profundidade: ${depth}`);
      console.log(`Verbose: ${verbose}`);

    }
  )
  .help()
  .alias('help', 'h')
  .parse();
