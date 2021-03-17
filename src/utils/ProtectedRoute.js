import React from 'react';
import { Redirect, Route, useHistory } from "react-router-dom";
const ProtectedRoute = ({ onLoginPopup, component: Component, ...props  }) => {
  const history = useHistory()
  const [noAuthRedirect, setNoAuthRedirect] = React.useState(false)
  // function Redirect() {
  //   history.push('/', { noAuthRedirect })
  //   const historyState = history.location.state
  //   const wasRedirected = historyState && setNoAuthRedirect(true)
  //   console.log(history)
  //   if(wasRedirected == true) {
  //     onLoginPopup()
  //   }
  //   history.replace('/')
  // }
  return (
    <Route>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./" />
      }
    </Route>
)}

export default ProtectedRoute;