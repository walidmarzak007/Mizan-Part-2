import { request } from "./api.js";
import { renderArticles } from "./ui.js";

let allArticles = [];

const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const statusFilter = document.getElementById("status-filter");
const catalogueContainer = document.getElementById("catalogue-container");
const detailsDialog = document.getElementById("article-details-dialog");
const detailsContent = document.getElementById("article-details-content");
const closeDetailsButton = document.getElementById("close-details-button");
closeDetailsButton.addEventListener("click", function () {
detailsDialog.close();
});

async function loadArticleDetails(articleId) {
try {
const article = await request(`/articles/${articleId}`);
detailsContent.textContent = "";

const title = document.createElement("h3");
title.textContent = article.title;

const description = document.createElement("p");
description.textContent = article.description;

const price = document.createElement("p");
price.textContent = `${article.price} MAD`;

const status = document.createElement("p");
status.textContent = article.status;

const date = document.createElement("p");
date.textContent = article.date;

detailsContent.append(title, description, price, status, date);
detailsDialog.showModal();} 
catch (error) {
console.error(error);
}}

searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
statusFilter.addEventListener("change", applyFilters);

catalogueContainer.addEventListener("click", function (event) {
const button = event.target.closest(".details-button");

if (!button) {
return;
}

const articleId = button.dataset.articleId;

loadArticleDetails(articleId);});

function applyFilters() {

const searchText = searchInput.value.toLowerCase();

const selectedStatus = statusFilter.value;

const selectedSort = sortSelect.value;

const filteredArticles = allArticles.filter(function (article) {

const matchesSearch = article.title.toLowerCase().includes(searchText);

const matchesStatus = selectedStatus === "" || article.status === selectedStatus;

return matchesSearch && matchesStatus;
});

if (selectedSort === "price") {
filteredArticles.sort(function (a, b) {
return a.price - b.price;
});
}

if (selectedSort === "title") {
filteredArticles.sort(function (a, b) {
return a.title.localeCompare(b.title, "fr");
});
}

if (selectedSort === "date") {
filteredArticles.sort(function (a, b) {
return new Date(b.date) - new Date(a.date);
});
}

renderArticles(filteredArticles);
}

async function loadArticles() {
try {

const articles = await request("/articles");
allArticles = articles;
renderArticles(articles);

} catch (error) {
console.error(error);
}}  
loadArticles();
