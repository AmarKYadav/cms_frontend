import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Components/Pages/Layout';
import Contact from './Components/Pages/Contact';
import Profile from './Components/Account.js/Profile';
import Account from './Components/Account.js/Account';
import Dashboard from './Components/Account.js/Dashboard';
import Menue from './Components/Cards/Menue';

function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Menue/>}/>
        
        <Route path='contact' element={<Contact/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='account' element={<Account/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
   
   </BrowserRouter>

    
</>
  );
}

export default App;
