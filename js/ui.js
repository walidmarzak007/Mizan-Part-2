const catalogueContainer = document.getElementById("catalogue-container");

export function renderArticles(articles) {
    catalogueContainer.textContent = "";

    articles.forEach((article) => {
        const card = document.createElement("article");
        card.classList.add("article-card");

        const title = document.createElement("h2");
        title.textContent = article.title;
        card.append(title);

        const description = document.createElement("p");
        description.textContent = article.description;
        card.append(description);

        const price = document.createElement("p");
        price.textContent = `${article.price} MAD`;
        card.append(price);

        const status = document.createElement("p");
        status.textContent = article.status;
        card.append(status);

        const date = document.createElement("p");
        date.textContent = article.date;
        card.append(date);

        catalogueContainer.append(card);

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Voir les détails";
        detailsButton.classList.add("details-button");
        detailsButton.dataset.articleId = article.id;

        card.append(detailsButton);
});}