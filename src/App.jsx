import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WorkerHome from "./pages/WorkerHome";
import CustomerHome from "./pages/CustomerHome";
import SearchWorkers from "./pages/WorkerPage";
import WorkerProfile from "./pages/WorkerProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/worker-home" element={<WorkerHome />} />
      <Route path="/customer-home" element={<CustomerHome />} />
      <Route path="/worker-page" element={<SearchWorkers/>} />
      <Route path="/worker-profile/:id" element={<WorkerProfile />} />
    </Routes>
  );
}

export default App;
