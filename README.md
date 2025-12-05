# Movie Catalog

> Your personal gateway to the world of cinema. Explore, search, and discover movies with a modern and responsive interface.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73C98?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

## 📖 About The Project

**Movie Catalog** is a dynamic and responsive web application built with the latest web technologies. It solves the problem of finding movie information quickly and elegantly. Users can search for any movie, view detailed information such as ratings, genres, and overview, all wrapped in a beautiful interface that supports both light and dark modes.

It leverages the **The Movie Database (TMDB) API** to provide real-time data.

### Key Features

*   **Real-time Search:** Instantly search for movies with a debounced search bar to minimize API calls.
*   **Responsive Design:** A seamless experience across mobile, tablet, and desktop devices.
*   **Dark/Light Mode:** Built-in theme switcher for comfortable viewing in any environment.
*   **Detailed Movie Views:** Access comprehensive movie details including posters, ratings, release dates, and synopses.
*   **Modern Architecture:** Built with React 19, TypeScript, and Tailwind CSS v4 for high performance and maintainability.

## 🛠 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend Framework** | ![React](https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white) |
| **Language** | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Build Tool** | ![Vite](https://img.shields.io/badge/-Vite-646cff?style=flat-square&logo=vite&logoColor=white) |
| **Icons** | ![Lucide](https://img.shields.io/badge/-Lucide_React-F05032?style=flat-square&logo=lucide&logoColor=white) |
| **Routing** | React Router DOM |
| **Data Source** | TMDB API |

## 🚀 Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

*   **Node.js**: Ensure you have Node.js installed (v18+ recommended).
*   **TMDB API Key**: You need an API key from [The Movie Database](https://www.themoviedb.org/documentation/api).

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/movie-catalog.git
    cd movie-catalog
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your TMDB API Key:
    ```bash
    echo "VITE_TMDB_API_KEY=your_api_key_here" > .env
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 💻 Usage

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Production Build
To build the app for production:
```bash
npm run build
```
This will compile the TypeScript code and bundle the application into the `dist` folder.

### Linting
To check for code quality issues:
```bash
npm run lint
```

## 📂 Project Structure

```text
movie-catalog/
├── src/
│   ├── components/       # Reusable UI components (MovieCard, SearchBar, etc.)
│   ├── context/          # React Context definitions (ThemeContext)
│   ├── hooks/            # Custom hooks (useFetch, useDebounce)
│   ├── layouts/          # Layout components (Root layout)
│   ├── pages/            # Application pages (HomePage, MoviePage)
│   ├── routes/           # Router configuration
│   ├── styles/           # Global styles and CSS files
│   ├── types/            # TypeScript interfaces and type definitions
│   ├── utils/            # Helper functions and formatters
│   └── main.tsx          # Application entry point
├── .env                  # Environment variables (API keys)
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🗺 Roadmap / To-Do

Based on the current project state, here are the suggested next steps:

1.  **Favorites System**: Fully implement the logic for the `FavoriteButton` to persist favorite movies in local storage.
2.  **Pagination**: Add pagination or infinite scroll to the movie search results to handle large datasets.
3.  **Testing**: Introduce unit tests (Vitest/Jest) for utilities and components to ensure reliability.

---