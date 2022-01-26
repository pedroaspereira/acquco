import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { GlobalStyle } from "./styles/global";

import { Dashboard } from './components/Dashboard'

export function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Dashboard />
        <GlobalStyle />
      </DndProvider>
    </div>

  );
}