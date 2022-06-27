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
import Login from './components/pages/login/Login/Login';
import SignUp from './components/pages/login/SignUp/SignUp';
import RequireAuth from './components/pages/login/RequireAuth/RequireAuth';
import Footer from './components/Footer/Footer';
import UserEntry from './components/pages/UserEntry/UserEntry';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>

        <Route path='/stock-out' element={<OutOfStock></OutOfStock>}></Route>

        <Route path='/manage-inventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>

        <Route path='/user-entry' element={<RequireAuth>
          <UserEntry></UserEntry>
        </RequireAuth>}></Route>

        <Route path='/add-item' element={<AddItem></AddItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
