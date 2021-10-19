import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Resister from './pages/Login/Resister/Resister';
import Header from './pages/Shared/Header/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Services from './pages/Services/Services/Services';
import PrivateRoute from './pages/Shared/Private/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Shop from './pages/Shopping/Shop/Shop';
import Medicines from './pages/Shopping/Medicines/Medicines/Medicines';
import Doctors from './pages/Services/Doctors/Doctors/Doctors';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <main style={{ minHeight: "1350px" }}>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/medicines">
                <Medicines></Medicines>
              </PrivateRoute>
              <Route path="/services">
                <Services></Services>
              </Route>
              <PrivateRoute path="/doctors">
                <Doctors></Doctors>
              </PrivateRoute>
              <Route path="/resister">
                <Resister></Resister>
              </Route>
              <PrivateRoute path="/shop">
                <Shop></Shop>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
