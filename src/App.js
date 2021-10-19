import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Resister from './pages/Login/Resister/Resister';
import Header from './pages/Shared/Header/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Medicine from './pages/Services/Medicine/Medicine';
import Services from './pages/Services/Services/Services';
import PrivateRoute from './pages/Shared/Private/PrivateRoute';
import Order from './pages/Shoping/Order/Order';
import AuthProvider from './context/AuthProvider';

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
              <Route path="/medicine">
                <Medicine></Medicine>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <PrivateRoute path="/order">
                <Order></Order>
              </PrivateRoute>
              <Route path="/resister">
                <Resister></Resister>
              </Route>
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
