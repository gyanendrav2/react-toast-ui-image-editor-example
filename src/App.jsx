import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImageEditing from "./Views/ImageEditing";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route  path="/" component={ImageEditing} />
          
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
