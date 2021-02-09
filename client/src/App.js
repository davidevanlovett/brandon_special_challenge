import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
function App() {
    return (
        <>
            <Router>
                <h2>Welcome to Redirector</h2>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/r/:eId">
                        <Redirect />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
