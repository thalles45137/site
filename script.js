// Adicionando produtos ao carrinho (funcionalidade simples)
const buttons = document.querySelectorAll('.adicionar');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
