// 1. Filtro por categoria
const filterButtons = document.querySelectorAll(".filter-button"); // Botões de filtro
const menuItems = document.querySelectorAll(".card"); // Itens do cardápio

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        menuItems.forEach(item => {
            if (category === "all" || item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
const cart = [];

// Atualiza a interface do carrinho
function updateCart() {
    const cartCount = document.querySelector("#cart-count");
    cartCount.textContent = cart.length; // Exibe a quantidade de itens no carrinho
}

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.dataset.name;
        const itemPrice = button.dataset.price;

        // Verifica se o item já foi adicionado ao carrinho
        const itemExists = cart.some(item => item.name === itemName);

        if (!itemExists) {
            cart.push({ name: itemName, price: itemPrice });
            alert(`${itemName} foi adicionado ao carrinho!`);
            updateCart(); // Atualiza o contador de itens no carrinho
        } else {
            alert(`${itemName} já está no carrinho!`);
        }
    });
});

// 3. Modo escuro
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleDarkMode.textContent = document.body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Escuro";
    
    // Aplica a animação suave no fundo
    document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
});

// 4. Busca em tempo real
let debounceTimer;

searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer); // Limpa o timer anterior
    debounceTimer = setTimeout(() => { // Aguarda 300ms após a última digitação
        const searchText = searchInput.value.toLowerCase();
        menuItems.forEach(item => {
            const itemName = item.querySelector("h3").textContent.toLowerCase();
            if (itemName.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }, 300);
});

// 5. Animações suaves
menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.05)";
        item.style.transition = "transform 0.3s ease";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});
