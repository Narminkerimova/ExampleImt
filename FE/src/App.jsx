import "./App.css";
import MainProvider from "./context/MainProvider";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home/index";
import Admin from "./pages/Admin/index";
import AdminAdd from "./pages/Admin Add/index";
import Basket from "./pages/Basket/index";
import WishList from "./pages/Wish List/index";
import DetailPage from "./pages/Detail Page/index";
import NoPage from "./pages/No Page/index";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminadd" element={<AdminAdd />} />
            <Route path="/detail/:_id" element={<DetailPage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
