import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import { footer as Footer } from './components/Footer/footer';

function App() {
    return (
    <Router>
   
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch> 
        <Footer/>
    </Router>
    );
}

export default App;
