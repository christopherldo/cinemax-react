import "./styles/App.css";

import { Account } from "./components/Account";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <main className="bg-background min-w-dvw min-h-dvh flex flex-col">
      <Account />
      <MovieList />
    </main>
  );
}

export default App;
