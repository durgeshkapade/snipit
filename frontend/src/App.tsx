import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home";
import DisplayPage from "@/pages/display";
import HistoryPage from "@/pages/history";



const App = () => {
    return (
        <div className='h-screen w-screen m-0 p-0 box-border'>
            <Router>
                <Routes>
                    <Route path="/" element={< HomePage />} />
                    <Route path="/:id" element={<DisplayPage />} />
                    <Route path="/history" element={< HistoryPage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App