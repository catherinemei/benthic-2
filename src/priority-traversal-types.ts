export type Id = string;

export type RelationNode = {
  id: Id;
  displayName: string;
  description?: string;
  parents: Id[];
  children: Id[];
  priority: number;
};

export type Hypergraph = {
  [id: Id]: RelationNode;
};

export type HypergraphWithSibling = {
  [id: Id]: RelationNodeWithSiblings;
};

export type RelationNodeWithSiblings = {
  id: Id;
  displayName: string;
  description?: string;
  parents: Id[];
  siblings: Id[];
  children: Id[];
  priority: number;
};

export type TraversalOutputProps = {
  nodeGraph: Hypergraph;
  showHypergraph?: boolean;
};

export type HypergraphNodeWithSiblingsProps = {
  node: RelationNodeWithSiblings;
  nodeGraph: HypergraphWithSibling;
  onNodeClick: (
    curId: string,
    newId: string,
    isFocusedParent?: boolean
  ) => void;
};

export type HypergraphNodeProps = {
  node: RelationNode;
  nodeGraph: Hypergraph;
  history: string[];
  parentFocusId: string;
  onNodeClick: (
    curId: string,
    newId: string,
    isFocusedParent?: boolean
  ) => void;
};

export type VisualizerProps = {
  nodeGraph: Hypergraph;
};
