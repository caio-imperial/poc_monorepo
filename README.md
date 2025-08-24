# PoC Monorepo

Este repositório é um monorepo que contém múltiplas aplicações e pacotes compartilhados, organizado para facilitar o desenvolvimento e a manutenção de diferentes partes de um sistema de forma coesa.

## Sumário

- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Instalação](#instalacao)
- [Executando Localmente](#executando-localmente)
  - [API](#api)
  - [Web](#web)
- [Pacotes Compartilhados](#pacotes-compartilhados)
- [Scripts](#scripts)
- [Contribuição](#contribuicao)
- [Licença](#licenca)

## Estrutura do Projeto

```
poc_monorepo/
├── apps/
│   ├── api/       # Backend (NestJS)
│   └── web/       # Frontend (Next.js)
├── packages/
│   ├── types/     # Tipos TypeScript
│   └── ui/        # Componentes React compartilhados
├── scripts/       # Scripts utilitários (e.g. clean.js)
├── package.json   # Configuração raiz do monorepo
├── pnpm-workspace.yaml  # Configuração do workspace PNPM
└── turbo.json     # Configuração do Turborepo
```

## Tecnologias

- Node.js
- PNPM
- Turborepo
- NestJS (apps/api)
- Next.js (apps/web)
- TypeScript
- Jest

## Instalação

No diretório raiz, execute:

```bash
pnpm install
```

## Executando Localmente

### API

```bash
cd apps/api
pnpm start
```

Para desenvolvimento com hot-reload:

```bash
pnpm run start:dev
```

### Web

```bash
cd apps/web
pnpm dev
```

## Pacotes Compartilhados

### types

Pacote com tipos TypeScript utilizados em todo o monorepo.

### ui

Biblioteca de componentes React compartilhados. Importar via:

```ts
import { MeuComponente } from 'ui';
```

## Scripts

### Scripts do Monorepo

```bash
pnpm dev     # turbo run dev - inicia todos os apps em modo desenvolvimento
pnpm build   # turbo run build - compila apps e pacotes
pnpm lint    # turbo run lint - verifica estilo de código
pnpm test    # turbo run test - executa testes
pnpm clean   # node scripts/clean.js - limpa artefatos de build
```

### Scripts utilitários

- `clean.js`: Limpa pastas de build e `node_modules`.

Executar:

```bash
node scripts/clean.js
```

## Contribuição

Contribuições são bem-vindas! Abra uma issue ou envie um pull request para melhorias e correções.

## Licença

Este projeto ainda não possui licença definida. Adicione um arquivo `LICENSE` conforme necessário. 