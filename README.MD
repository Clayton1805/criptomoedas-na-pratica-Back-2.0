## Funcionalidades da api

- Cadastrar usuários apenas com nome e email, cujo nome não pode se repetir.
  - Confirmar email de cadastro, para validar a conta.

- O usuário pode cadastrar, alterar e deletar seus artigo.

- Os artigos devem poder ser filtrados em uma lista paginada ordenados por relevância dependendo do termo procurado, levando em conta o titulo sinopse e texto do artigo para essa filtragem, os likes também devem ser levados em consideração mais os dislikes não.

- Permitir que usuários cadastrados possam dar likes em artigos mostrando que ele foi util, e dislikes mostrando que foram desinformação sendo que todo o dislike vem acompanhado de uma critica em texto obrigatória, a mudanças desses estados deve ser propagada em tempo real pelo protocolo tcp.

## Requisitos funcionais