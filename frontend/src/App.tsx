import './App.css'
import {Route, Routes} from "react-router-dom";
import ShipList from "./pages/ShipList.tsx";
import ShipDetail from "./pages/ShipDetail.tsx";
import ShipNewForm from "./pages/ShipNewForm.tsx";
import ShipEditForm from "./pages/ShipEditForm.tsx";
import AuthProvider from "./components/AuthProvider.tsx";
import Menu from "./components/Menu.tsx";
import ProtectedResource from "./components/ProtectedResource.tsx";

function App() {

  return (
      <AuthProvider>
          <ProtectedResource>
              <div>
                  <Menu />
                  <Routes>
                      <Route path="/" element={<ShipList />} />
                      <Route path="/ships/:id" element={<ShipDetail />} />
                      <Route path="/create" element={<ShipNewForm />} />
                      <Route path="/edit/:id" element={<ShipEditForm />} />
                  </Routes>
              </div>
          </ProtectedResource>
      </AuthProvider>
  )
}

export default App
