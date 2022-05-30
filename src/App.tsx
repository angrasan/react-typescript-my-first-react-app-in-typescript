import React from "react";
import Counter from "./Counter";

interface AppProps {
  message?: string;
}

// type NulAppProps = Partial<AppProps>

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: "Hello defaultProps!",
  // description: 'This is App component',
};

export default App;
