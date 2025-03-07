import type { Component } from "solid-js";
import { TraversalOutputComponentKeyboardParentFocus } from "./priority-traversal-parent-focus";

import { pulleyHypergraph } from "./input-pulley-easy";

const App: Component = () => {
  return (
    <TraversalOutputComponentKeyboardParentFocus
      nodeGraph={pulleyHypergraph}
      showHypergraph={false}
    />
  );
};

export default App;
