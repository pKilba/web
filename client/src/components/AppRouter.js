
import {Switch, Route, Redirect} from 'react-router-dom'
import {SHOP_ROUTE} from "../utils/consts";
import {authRoutes,publicRoutes} from "../routes";
import {Context} from "../index";
import {useContext} from "react";


const AppRouter = () => {

   const {user} = useContext(Context)
console.log(user)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;