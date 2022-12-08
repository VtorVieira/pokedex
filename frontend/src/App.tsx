import { Navigate, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Main from './pages/Main';
import './styles/global.css'

function App() {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Navigate to="/form" />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
