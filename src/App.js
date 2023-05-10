import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/layout';
import Home from './home/components/home';
import Calendar from './calendar/components/calendar';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;