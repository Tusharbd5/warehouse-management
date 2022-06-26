import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home/Home';
import Inventory from './components/pages/Inventory/Inventory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OutOfStock from './components/pages/OutOfStock/OutOfStock';
import ManageInventory from './components/pages/ManageInventory/ManageInventory';
import AddItem from './components/pages/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/stock-out' element={<OutOfStock></OutOfStock>}></Route>
        <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/add-item' element={<AddItem></AddItem>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
