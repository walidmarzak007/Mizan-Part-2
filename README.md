# Mizan — Part II: Catalogue Management

Mizan Part II is a web application developed for **Bijouterie Al Andalous**, a jewellery shop in Nador, Morocco.

Its purpose is to provide a back-office interface for managing jewellery catalogue items and customer reservations using an external REST API simulated with JSON Server.

## Technologies

- HTML
- CSS
- JavaScript (ES6 Modules)
- Fetch API
- JSON Server
- LocalStorage

## API

The project uses **JSON Server** to simulate a REST API.

- Base URL: `http://localhost:3000`
- Main endpoint: `/articles`
- Data is stored in `db.json`.

## Implemented Features

- Set up JSON Server with sample jewellery articles.
- Create a centralized API client using a reusable `request()` function.
- Send HTTP requests using Fetch API.
- Set JSON request headers.
- Handle HTTP response errors.
- Implement an 8-second request timeout using AbortController.
- Normalize errors into five categories: HTTP, network, offline, timeout, and JSON parsing.
- Test successful GET requests and API error handling.

## Upcoming Features

- Display and retrieve catalogue articles.
- Search, filter, and sort articles.
- Create, edit, and delete catalogue items.
- Implement loading, success, and error states.
- Cache API data for offline access.
- Save user preferences using LocalStorage.
- Add a network monitoring panel.

## Technical Choices

- Vanilla JavaScript without frameworks.
- ES modules to organize the application.
- A centralized API client for all network requests.
- JSON Server as a simulated REST API.
- AbortController to prevent requests from taking too long.
- textContent to safely display external data.
- Versioned LocalStorage keys for cached data and preferences.

## Running the Project

Install dependencies:

```bash
npm install
```

Start the JSON Server:

```bash
npx json-server --watch db.json --port 3000
```

The API will be available at:

`http://localhost:3000/articles`

Open `index.html` using Live Server.

---

**Project:** Mizan — Part II  
**Client:** Bijouterie Al Andalous  
**Interface language:** French  
**Project type:** Front-end web application connected to a simulated REST API