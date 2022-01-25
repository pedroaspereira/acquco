import { GlobalStyle } from "./styles/global";

import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <div className="App">
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}