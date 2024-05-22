# Formulário GMUD

Este projeto é uma aplicação web desenvolvida para automatizar a criação de documentos GMUD (Gestão de Mudanças). A aplicação permite que os usuários preencham um formulário com informações detalhadas sobre mudanças a serem implementadas em APIs, gerando a documentação necessária de forma automática. 

## Funcionalidades

- **Seleção de API:** Escolha a API específica para a qual a mudança será aplicada.
- **Descrição da Mudança:** Forneça uma descrição detalhada da mudança.
- **Número das Mudanças:** Insira os números das mudanças (ex, pf, cb) garantindo que não haja duplicidade.
- **Tag de Imagem:** Valide e insira a tag de imagem no formato correto.
- **Objetivo da Mudança:** Descreva o objetivo da mudança.
- **Impacto:** Selecione e descreva os possíveis impactos da mudança.
- **Responsável pelo Rollback:** Escolha o responsável pelo rollback em caso de problemas.
- **Plano de Validação:** Plano detalhado para validação do ambiente.
- **Data e Hora de Implementação:** Defina a data e hora para a implementação da mudança.
- **Log de Implementações:** Visualize o histórico de implementações anteriores.

## Tecnologias Utilizadas

- **HTML5:** Estrutura básica da aplicação.
- **CSS3:** Estilização utilizando Bootstrap para uma interface responsiva.
- **JavaScript:** Lógica da aplicação para manipulação do DOM e validações.
- **Local Storage:** Armazenamento do log de implementações no navegador.

## Como Usar

1. Clone este repositório.
   ```bash
   git clone https://github.com/yourusername/formulario-gmud.git
   ```
2. Abra o arquivo `view-gmud-creator.html` no seu navegador.
3. Preencha o formulário com as informações da mudança.
4. Clique em "Gerar Documentação" para visualizar e copiar a documentação gerada.
5. Acesse o log de implementações anteriores através do botão "Log Implementações".

## Scripts

O arquivo `script.js` contém a lógica para:

- Validação dos campos do formulário.
- Geração automática da documentação GMUD.
- Armazenamento e visualização do log de implementações.

## Estrutura do Projeto

- `view-gmud-creator.html`: Página principal com o formulário GMUD.
- `view-gmud-log.html`: Página para visualização do log de implementações.
- `css/style.css`: Estilos customizados.
- `js/script.js`: Lógica e manipulação do DOM.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Para isso, siga os passos:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção.
   ```bash
   git checkout -b minha-feature
   ```
3. Commit suas alterações.
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para a branch original.
   ```bash
   git push origin minha-feature
   ```
5. Crie um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido por [willianrattis](https://github.com/willianrattis).
