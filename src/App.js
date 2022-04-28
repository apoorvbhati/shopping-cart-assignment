import { Route, Routes } from 'react-router';
import { Fragment } from 'react';

import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/navigation.component';
import Login from './routes/Login/login';
import Register from './routes/Register/register';
import Footer from './routes/Footer/footer';
import PlpPage from './routes/PLPpage/plpPage.component';

import './App.css';

function App() {
  return (
      <Fragment>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/PLP" element={<PlpPage />}></Route>
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
          </Route>
        </Routes>
        <Footer />
      </Fragment>
  );
}

export default App;
