import * as React from "react";
import { render } from "react-dom";
import Logo from "./Logo";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
