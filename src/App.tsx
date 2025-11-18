import "./styles/App.css";

import { Account } from "./components/Account";
import { MovieList } from "./components/MovieList";

function App() {
  return (
    <main className="bg-[#1F1D2B] min-w-dvw min-h-dvh flex flex-col">
      <Account />
      <MovieList />
    </main>
  );
}

export default App;
