# KTI DEX Dev - SDK Ethereum (EVM)

Este é o repositório oficial do **KTI DEX Dev EVM SDK**, um módulo dedicado à interação com a rede Ethereum e futuras blockchains EVM, criado como parte de uma corretora descentralizada multi-chain. Este projeto foi desenvolvido para ser usado localmente ou como dependência em outros projetos React/Vue/Angular.

O objetivo deste repositório é:
- Criar uma camada de abstração para transações Ethereum
- Fornecer uma interface clara para carteiras e contratos inteligentes
- Ser integrado ao projeto principal da corretora (`ktidexdev`)
- Ser totalmente independente do OpenBook DEX original

---

## 🧰 Tecnologias Usadas

| Tecnologia        | Versão       | Descrição |
|------------------|--------------|-----------|
| Node.js          | v20+         | Ambiente de execução |
| npm              | v11+         | Gerenciamento de pacotes |
| TypeScript       | ^5.8.3      | Tipagem estática e melhor manutenção |
| Ethers.js        | ^6.0.0      | Biblioteca para interagir com a rede Ethereum |
| Tsup             | ^8.3.0      | Compilação moderna via esbuild |
| Git              | 2.x+         | Controle de versão |

---

## 📦 Funcionalidades Principais

- Enviar transações ETH entre carteiras
- Interagir com contratos inteligentes
- Suporte a RPCs customizadas
- Modularizado para uso em projetos principais
- Estrutura compatível com Vite, Webpack, Next.js e React Native

---

## 🛠️ Como Usar

### Instale via NPM (quando publicado)

```bash
npm install

import { EthProvider } from 'evm-sdk';

const eth = new EthProvider('https://rpc.ankr.com/eth ');

await eth.sendTransaction(
  'SEU_PRIV_KEY', 
  'DST_ADDRESS',
  0.0001 // Quantidade de ETH
);

evm-sdk/
├── src/
│   └── index.ts     ← Classe principal EthProvider
│
├── dist/
│   ├── index.d.ts   ← Declarações de tipo
│   └── index.js     ← Código compilado pronto para uso
│
├── package.json     ← Scripts e dependências
└── tsconfig.json    ← Configuração do TypeScript

Suporte a ERC-20 tokens
Integração com MetaMask e outros wallets
Suporte a múltiplas redes EVM (Goerli, Sepolia, Arbitrum, Optimism, etc.)
