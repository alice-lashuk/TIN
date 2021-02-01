import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
const ProtectedRouter = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      !!localStorage.getItem("jwt_token")
        ? <Component {...props} />
        : <Redirect to={{
            pathname: "/login",
            state: { msg: "Please log in"}
          } }/>
    )} />
)

const ProtectedRouterAdmin = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      !!localStorage.getItem("jwt_token") && localStorage.getItem("isAdmin") == 1
        ? <Component {...props} />
        : <Redirect to={{
            pathname: "/",
            state: { msg: "Please log in or re login with the permission of Admin"}
          } }/>
    )}/>
)

export {ProtectedRouter,ProtectedRouterAdmin};