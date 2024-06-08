import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes';
import Navbar from './screens/layouts/Navbar';
import { useSelector } from "react-redux";


function App() {
  const theme = useSelector(state => state.theme).theme;

  return (
    <main className={`min-h-screen ${theme === 'light' ? "text-black bg-white" : "text-white bg-black"}`}>
      <AppRoutes />
    </main>
  );
}

export default App;
