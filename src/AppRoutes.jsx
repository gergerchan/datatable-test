import { Switch, Route } from "react-router-dom";
import Pages from "./Pages";

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/">
                <Pages />
            </Route>
      </Switch>
    )
}

export default AppRoutes

