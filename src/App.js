import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<></>} />
          <Route path="home" element={<></>} />
          <Route path="hourly" element={<></>} />
          <Route path="daily" element={<></>} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
