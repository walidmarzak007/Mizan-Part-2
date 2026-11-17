import { request } from "./api.js";

const catalogueContainer = document.getElementById("catalogue-container");

async function loadArticles() {
    try {
const articles = await request("/articles");
        console.log(articles);

    } catch (error) {
        console.error(error);
    }
}  
loadArticles();
