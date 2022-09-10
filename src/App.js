import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewInvoice from "./pages/sales/NewInvoice";
import ManageInvoice from "./pages/sales/ManageInvoices";
import NewQuote from "./pages/sales/NewQuote";
import ManageQuote from "./pages/sales/ManageQuote";
import NewTransfer from "./pages/stock/NewTransfer";
import ManageTransfer from "./pages/stock/MangeTransfer";
import NewStockQuote from "./pages/stock/NewStockQuote.jsx";
import MangeStockQuote from "./pages/stock/NewStockQuote"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/new-invoice" element={<NewInvoice/>}/>
          <Route path="/manage-invoice" element={<ManageInvoice/>}/>
          <Route path="/sales/new-quote" element={<NewQuote/>}/>
          <Route path="/sales/manage-quote" element={<ManageQuote/>}/>
          <Route path="/new-transfer" element={<NewTransfer/>}/>
          <Route path="/stock/new-quote" element={<NewStockQuote/>}/>
          <Route path="/manage-transfer" element={<ManageTransfer/>}/>
          <Route path="/manage-stock" element={<MangeStockQuote/>}/>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
              </Route>
               <Route path="products">
               <Route index element={<List />} />
               <Route path=":productId" element={<Single />} />
               <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
