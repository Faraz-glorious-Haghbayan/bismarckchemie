const fs = require("fs");
const fetch = require("node-fetch");

const apiKey = "0fba978baa6e4330bfa86567d331ddcd";
const url = `https://newsapi.org/v2/everything?q=chemie&language=de&sortBy=publishedAt&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      console.log("Keine aktuellen Artikel gefunden.");
      return;
    }

    let htmlContent = `
      <!DOCTYPE html>
      <html lang="de">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Aktuelle Nachrichten aus der Welt der Chemie, automatisch generiert für Wissenschaftsbegeisterte.">
        <meta name="keywords" content="Chemie, Nachrichten, Wissenschaft, Blog, aktuelle Chemie-News">
        <meta name="author" content="Faraz Haghbayan">
        <title>Bismarckchemie - Aktuelle Chemie Nachrichten</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0; }
          .container { max-width: 800px; margin: 20px auto; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }
          h1 { text-align: center; color: #333; }
          .blog-post { margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #ddd; }
          .blog-title { font-size: 1.5em; color: #333; }
          .blog-content { color: #555; margin: 10px 0; }
          .blog-footer { font-size: 0.9em; color: #999; margin-top: 10px; }
          .source-link { color: #1a73e8; text-decoration: none; }
          .source-link:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Chemie-Nachrichten</h1>
    `;

    data.articles.slice(0, 5).forEach(article => {
      htmlContent += `
        <div class="blog-post">
          <h2 class="blog-title">${article.title}</h2>
          <p class="blog-content">${article.description || "Keine Beschreibung verfügbar."}</p>
          <p class="blog-footer">
            Quelle: <a href="${article.url}" class="source-link" target="_blank">${article.source.name}</a> | 
            Veröffentlicht am: ${new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </div>
      `;
    });

    htmlContent += `</div></body></html>`;

    fs.writeFileSync("index.html", htmlContent);
    console.log("HTML-Datei wurde erfolgreich aktualisiert.");
  } catch (error) {
    console.error("Fehler beim Abrufen der Nachrichten:", error);
  }
}

fetchNews();
