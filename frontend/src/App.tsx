import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import ShipList from "./pages/ShipList.tsx";
import ShipDetail from "./pages/ShipDetail.tsx";
import ShipNewForm from "./pages/ShipNewForm.tsx";
import ShipEditForm from "./pages/ShipEditForm.tsx";

function App() {

  return (
      <div className="p-4">
          <nav className="mb-4 space-x-4">
              <Link to="/">Home</Link>
               -
              <Link to="/create">Create Ship</Link>
          </nav>
          <Routes>
              <Route path="/" element={<ShipList />} />
              <Route path="/ships/:id" element={<ShipDetail />} />
              <Route path="/create" element={<ShipNewForm />} />
              <Route path="/edit/:id" element={<ShipEditForm />} />
          </Routes>
      </div>
  )
}

export default App
