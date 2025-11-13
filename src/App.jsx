import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./Components";
import { Home, CreatePost } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="sm:p-8 px-4 py-8 w-full flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
