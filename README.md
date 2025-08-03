# 🍽️ React MealsDB App

A simple React app that fetches and displays meals from [TheMealDB API]([https://www.themealdb.com](https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood)/) using `axios` and React hooks (`useState`, `useEffect`). This project focuses on practicing API integration in a React frontend.

## 🚀 Features

- Fetch meals data from TheMealDB API
- Display a list of meals with images and names
- Search or filter meals (optional if implemented)
- Uses `axios` for HTTP requests
- Built with functional components and React hooks

## 🛠️ Technologies Used

- React (Functional Components)
- React Hooks: `useState`, `useEffect`
- Axios (for API requests)
- HTML, CSS


## ⚙️ How It Works

- On component mount (`useEffect`), the app sends a GET request using `axios` to fetch meals from TheMealDB.
- The response data is stored in a state variable using `useState`.
- The meals are then dynamically rendered on the page.

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-mealsdb-app.git
   cd react-mealsdb-app
2. npm install
3. npm run dev

