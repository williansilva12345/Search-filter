function filter() {
    // Obtém o valor do input
    var input = document.getElementById("input");
    var valueof = input.value.toUpperCase(); // Converte para maiúsculo

    // Obtém a lista de itens
    var list = document.getElementById("list");
    var li = list.getElementsByTagName("div");

    // Se o campo de pesquisa estiver vazio, exibe todos os itens
    if (valueof === "") {
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = ""; // Exibe todos os itens
        }

        // Esconde a mensagem "Nenhum item encontrado"
        var noResults = document.getElementById('noResults');
        noResults.style.display = "none";
    } else {
        var found = false;

        // Loop para filtrar os itens da lista
        for (let i = 0; i < li.length; i++) {
            var atual = li[i];

            // Verifica se o item corresponde à pesquisa
            if (atual.innerText.toUpperCase().includes(valueof)) {
                atual.style.display = ''; // Exibe o item
                found = true; // Marca que encontrou um item
            } else {
                atual.style.display = "none"; // Oculta o item
            }
        }

        // Exibe ou esconde a mensagem "Nenhum item encontrado"
        var noResults = document.getElementById('noResults');
        if (!found) {
            noResults.style.display = "block"; // Exibe a mensagem
        } else {
            noResults.style.display = "none"; // Esconde a mensagem
        }
    }
}
