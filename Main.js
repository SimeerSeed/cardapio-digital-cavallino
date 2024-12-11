// Dropdown interativo
document.querySelectorAll('.dropbtn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownContent = btn.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});


// Alertas para "Consultar a taxa de entrega"
document.querySelectorAll('p').forEach((element) => {
    if (element.textContent.includes("Consultar a taxa de entrega")) {
        element.addEventListener('click', () => {
            alert("Por favor, entre em contato para consultar a taxa de entrega.");
        });
    }
});
