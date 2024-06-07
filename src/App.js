import logo from './logo.svg';
import './App.css';
import AddShoppingCart from './components/AddShoppingCart';
import SearchCart from './components/SearchCart';
import DeleteCart from './components/DeleteCart';
import ViewCart from './components/ViewCart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddShoppingCart/>}/>
      <Route path="/search" element={<SearchCart/>}/>
      <Route path="/delete" element={<DeleteCart/>}/>
      <Route path="/viewcart" element={<ViewCart/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
