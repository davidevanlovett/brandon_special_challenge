import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <h2>Welcome</h2>
                <Switch>
                    <Route>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;
