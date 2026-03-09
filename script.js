function adicionarCarrinho(produto) {
    alert(produto + ' adicionado ao carrinho!');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada! Entraremos em contato em breve.');
    this.reset();
});