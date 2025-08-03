import './App.css'
import {Route, Routes} from "react-router-dom";
import ShipList from "./pages/ShipList.tsx";
import ShipDetail from "./pages/ShipDetail.tsx";
import ShipNewForm from "./pages/ShipNewForm.tsx";
import ShipEditForm from "./pages/ShipEditForm.tsx";
import Login from "./pages/Login.tsx";
import AuthProvider from "./AuthProvider.tsx";
import Menu from "./components/Menu.tsx";

function App() {

  return (
      <AuthProvider>
          <div className="p-4">
              <Menu />
              <Routes>
                  <Route path="/" element={<ShipList />} />
                  <Route path="/ships/:id" element={<ShipDetail />} />
                  <Route path="/create" element={<ShipNewForm />} />
                  <Route path="/edit/:id" element={<ShipEditForm />} />
                  <Route path="/login" element={<Login />} />
              </Routes>
          </div>
      </AuthProvider>
  )
}

export default App
