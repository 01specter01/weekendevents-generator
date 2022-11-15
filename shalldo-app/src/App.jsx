import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ContendPage" element={<ContentPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
