import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoutes from "./components/auth/ProtectRoutes";
import { LayoutLoader } from "./components/Layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy (()=> import ("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<ProtectRoutes user={user}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        <Route path="/login" element={<ProtectRoutes user={!user} redirect="/">
          <Login/>
        </ProtectRoutes>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
