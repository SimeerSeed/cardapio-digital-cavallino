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

// 2. Carrinho de compras
const cart = [];
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.dataset.name;
        const itemPrice = button.dataset.price;
        cart.push({ name: itemName, price: itemPrice });
        alert(`${itemName} foi adicionado ao carrinho!`);
        console.log(cart);
    });
});

// 3. Modo escuro
const toggleDarkMode = document.querySelector("#dark-mode-toggle");

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleDarkMode.textContent = document.body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Escuro";
});

// 4. Busca em tempo real
const searchInput = document.querySelector("#search-bar");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    menuItems.forEach(item => {
        const itemName = item.querySelector("h3").textContent.toLowerCase();
        if (itemName.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
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
