# 🧶 Catálogo de Produtos de Crochê

Este é um projeto de catálogo de produtos de crochê, onde os usuários podem visualizar diversos itens, filtrar por categorias e adicionar produtos ao carrinho de compras. O projeto também permite que os usuários enviem seus pedidos via WhatsApp diretamente a partir do carrinho de compras.

## 🌟 Funcionalidades

- **Visualização de Produtos:** Exibe uma lista de produtos de crochê com detalhes.
- **Filtragem por Categorias:** Permite filtrar produtos por categorias específicas.
- **Carrinho de Compras:** Adicione produtos ao carrinho e veja os itens selecionados.
- **Envio de Pedidos via WhatsApp:** Envia o resumo do pedido diretamente para o WhatsApp do vendedor.
- **Links para Redes Sociais:** Links para as redes sociais da loja no cabeçalho.

## 🚀 Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção da interface de usuário.
- **React Router:** Biblioteca para roteamento em aplicações React.
- **Context API:** Gerenciamento de estado global para o carrinho e produtos.
- **Tailwind CSS:** Framework CSS para estilização.
- **React Icons:** Biblioteca de ícones para React.

## 📂 Estrutura do Projeto

```
.
├── public
│   ├── capa-site.png
│   ├── facebook-icon.png
│   ├── instagram-icon.png
│   ├── whatsapp-icon.png
│   └── index.html
├── src
│   ├── components
│   │   ├── CartItem.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── contexts
│   │   ├── CartContext.jsx
│   │   ├── ProductContext.jsx
│   │   └── SidebarContext.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── ProductDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- npm (ou yarn) instalado

### Passos para Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/catalogo-croche.git
```

2. Navegue até o diretório do projeto:

```bash
cd catalogo-croche
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Execute o projeto:

```bash
npm start
# ou
yarn start
```

5. Abra seu navegador e acesse:

```
http://localhost:3000
```

## 🧩 Detalhes dos Componentes

### Header

O componente `Header` contém o logotipo, links para redes sociais, filtro de categorias e o ícone do carrinho de compras.

### Sidebar

O componente `Sidebar` exibe os itens do carrinho e permite o envio do pedido via WhatsApp.

### Home

O componente `Home` exibe todos os produtos e permite filtrar por categoria.

## 🎨 Estilização

- **Tailwind CSS:** Utilizado para a criação de estilos de forma rápida e eficiente, garantindo um design responsivo e moderno.
- **Componentização:** Utilização de componentes reutilizáveis para facilitar a manutenção e expansão do projeto.

## 📱 Integração com WhatsApp

A funcionalidade de envio de pedidos via WhatsApp permite que os clientes enviem suas compras diretamente para o vendedor, proporcionando uma experiência de compra direta e personalizada.

## 📋 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.