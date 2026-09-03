# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com este projeto! Este guia irá ajudá-lo a começar.

## 🚀 Como Contribuir

### 1. Configuração do Ambiente

1. Fork este repositório
2. Clone seu fork: `git clone https://github.com/seu-usuario/react-base-udemy.git`
3. Instale as dependências: `npm install`
4. Crie uma branch para sua feature: `git checkout -b feature/nova-funcionalidade`

### 2. Padrões de Código

- Use **ESLint** para verificar a qualidade do código
- Siga o padrão de **commits semânticos** (Conventional Commits)
- Mantenha os componentes pequenos e reutilizáveis
- Adicione testes para novas funcionalidades
- Documente mudanças significativas no README

### 3. Convenção de Commits

```
feat: Adiciona nova funcionalidade
fix: Corrige um bug
docs: Altera documentação
style: Formata código (sem mudança de funcionalidade)
refactor: Refatora código
test: Adiciona ou corrige testes
chore: Tarefas de manutenção
```

### 4. Processo de Pull Request

1. Certifique-se de que todos os testes passam: `npm test`
2. Verifique o linting: `npm run lint`
3. Faça o build: `npm run build`
4. Atualize a documentação se necessário
5. Abra um Pull Request com descrição clara das mudanças

### 5. Estrutura do Projeto

```
src/
├── assets/         # Recursos estáticos
├── components/     # Componentes UI reutilizáveis
├── pages/          # Páginas da aplicação
├── routes/         # Configuração de rotas
├── services/       # Integrações com APIs
├── store/          # Redux (sagas, reducers, actions)
├── styles/         # Temas e estilos globais
├── utils/          # Funções utilitárias
└── context/        # Contextos React
```

## 🐛 Reportando Bugs

Ao reportar um bug, inclua:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)
- Ambiente (OS, browser, versão do Node)

## 💡 Sugerindo Features

Para sugerir uma feature:
- Descreva o problema que ela resolve
- Explique a solução proposta
- Liste alternativas consideradas
- Adicione mockups ou wireframes (se aplicável)

## 📝 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a Licença MIT.