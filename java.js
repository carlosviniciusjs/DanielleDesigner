/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//observer para dar efeito na classe cliente quando rolar a pagina
const clientes = document.querySelectorAll('.cliente');
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('show');
  } else {
    entry.target.classList.remove('show'); 
  }
});
});
clientes.forEach((cliente) => observer.observe(cliente));

//fazer sumir a opção de fazer orçamento quando rolar a pagina
const fazerOrcamento = document.getElementById('fazerorcamento');
window.addEventListener('scroll', () => {
if (window.scrollY > 50) { 
  fazerOrcamento.classList.add('hidden');
} else {
  fazerOrcamento.classList.remove('hidden');
}
});

