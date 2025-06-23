# 🚀 Gerador de Propostas Comerciais - Thiago Consultoria

Um template de site estático moderno e profissional que funciona como um gerador de propostas comerciais personalizadas. Desenvolvido com React, TailwindCSS e Framer Motion para criar propostas elegantes e persuasivas sem necessidade de banco de dados.

## ✨ Características

- **Design Minimalista e Profissional**: Interface elegante com paleta de cores verde escuro
- **Geração Instantânea**: Crie propostas comerciais em menos de 5 minutos
- **Sem Banco de Dados**: Utiliza LocalStorage para armazenamento temporário
- **Responsivo**: Funciona perfeitamente em desktop e mobile
- **Animações Suaves**: Transições elegantes com Framer Motion
- **Copywriting Persuasivo**: Textos otimizados com gatilhos mentais
- **URL Única**: Cada proposta gera uma URL única para compartilhamento
- **Pronto para Impressão**: Layout otimizado para PDF/impressão

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **TailwindCSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Shadcn/UI** - Componentes de interface
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm
- Conta na Vercel (para deploy)

## 🚀 Instalação e Execução Local

### 1. Clone ou extraia o projeto
```bash
# Se usando Git
git clone <url-do-repositorio>
cd gerador-propostas

# Ou extraia o arquivo ZIP e navegue até a pasta
```

### 2. Instale as dependências
```bash
npm install
# ou
pnpm install
```

### 3. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
pnpm run dev
```

### 4. Acesse a aplicação
Abra seu navegador e acesse: `http://localhost:5173`

## 🌐 Deploy na Vercel

### Método 1: Deploy via CLI (Recomendado)

1. **Instale a CLI da Vercel**
```bash
npm install -g vercel
```

2. **Faça login na Vercel**
```bash
vercel login
```

3. **Execute o deploy**
```bash
vercel
```

4. **Siga as instruções**
- Confirme o diretório do projeto
- Escolha sua conta/organização
- Confirme o nome do projeto
- Aguarde o build e deploy

### Método 2: Deploy via Dashboard

1. **Acesse** [vercel.com](https://vercel.com)
2. **Faça login** com sua conta
3. **Clique em "New Project"**
4. **Importe o projeto**:
   - Se usando Git: conecte seu repositório
   - Se usando arquivos locais: faça upload do ZIP
5. **Configure o projeto**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **Clique em "Deploy"**

### Configurações Importantes para Vercel

O projeto já está configurado com:
- `vercel.json` (se necessário)
- Build otimizado para produção
- Roteamento SPA configurado

## 📱 Como Usar

### 1. Página Inicial
- Apresenta a empresa e proposta de valor
- Seções persuasivas com gatilhos mentais
- Depoimentos de clientes
- CTA para criar nova proposta

### 2. Formulário de Criação
- Preencha todos os campos obrigatórios:
  - Título da Proposta
  - Destinatário (Cliente/Empresa)
  - Nome do Projeto
  - Descrição do Problema
  - Solução Proposta
  - Benefícios
  - Prazo de Entrega
  - Valor
- Clique em "Gerar Proposta Comercial"

### 3. Proposta Gerada
- Visualização profissional da proposta
- Layout otimizado para impressão
- Botões para compartilhar e imprimir
- URL única para envio ao cliente

## 🎨 Personalização

### Branding
Para personalizar o branding da empresa:

1. **Logo e Nome**: Edite os componentes em `src/components/`
2. **Cores**: Modifique as variáveis CSS em `src/App.css`
3. **Conteúdo**: Atualize textos nos componentes React

### Cores Principais
```css
--primary: oklch(0.3 0.15 150); /* Verde escuro */
--primary-foreground: oklch(0.985 0 0); /* Branco */
```

### Depoimentos e FAQ
Edite os arrays de depoimentos e FAQ nos componentes:
- `src/components/Home.jsx`
- `src/components/ProposalView.jsx`

## 📁 Estrutura do Projeto

```
gerador-propostas/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes de UI (shadcn)
│   │   ├── Home.jsx       # Página inicial
│   │   ├── ProposalForm.jsx # Formulário
│   │   └── ProposalView.jsx # Visualização da proposta
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos globais
│   └── main.jsx           # Ponto de entrada
├── package.json           # Dependências
├── vite.config.js         # Configuração do Vite
└── README.md             # Este arquivo
```

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 📊 Funcionalidades Técnicas

### Armazenamento
- **LocalStorage**: Propostas são salvas localmente no navegador
- **Persistência**: Dados mantidos entre sessões
- **IDs Únicos**: Cada proposta tem um timestamp único

### Responsividade
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação automática para diferentes telas
- **Touch Friendly**: Elementos otimizados para toque

### Performance
- **Lazy Loading**: Componentes carregados sob demanda
- **Otimização de Bundle**: Build otimizado com Vite
- **Animações Performáticas**: Uso de transform e opacity

## 🎯 Recursos de Conversão

### Copywriting Persuasivo
- Headlines de impacto
- Gatilhos de urgência e escassez
- Prova social com depoimentos
- CTAs estrategicamente posicionados

### Design Profissional
- Hierarquia visual clara
- Cores que transmitem confiança
- Tipografia legível e moderna
- Espaçamento equilibrado

## 🔒 Segurança e Privacidade

- **Dados Locais**: Informações ficam no navegador do usuário
- **Sem Servidor**: Não há coleta de dados em servidor
- **HTTPS**: Deploy automático com SSL na Vercel

## 🐛 Solução de Problemas

### Build Falha
```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro de Dependências
```bash
# Verifique a versão do Node.js
node --version  # Deve ser 18+

# Atualize as dependências
npm update
```

### Problemas de Deploy
- Verifique se o build local funciona: `npm run build`
- Confirme as configurações da Vercel
- Verifique os logs de build no dashboard

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação acima
2. Consulte os logs de erro no console
3. Entre em contato com o desenvolvedor

## 📄 Licença

Este projeto foi desenvolvido como template personalizado para Thiago Consultoria.

---

**Desenvolvido com ❤️ para gerar propostas comerciais profissionais e converter mais clientes.**

