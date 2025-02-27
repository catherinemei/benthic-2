import { Hypergraph } from "./priority-traversal-types";

export const pulleyHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Pulley diagram",
    description:
      "A mechanical system consisting of pulleys, ropes, and weights.",
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
    parents: [],
    children: [
      "4",
      "5",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "13",
    ],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Pulley A",
    parents: ["14", "22"],
    children: [],
    priority: 1,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "2": {
    id: "2",
    displayName: "Pulley B",
    parents: ["15", "24"],
    children: [],
    priority: 1,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "3": {
    id: "3",
    displayName: "Pulley C",
    parents: ["16", "21"],
    children: [],
    priority: 1,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "4": {
    id: "4",
    displayName: "Weight W1",
    description: "Weight of 1 unit",
    parents: ["0", "17"],
    children: [],
    priority: 2,
    descriptionTokens: {
      label: "",
      longDescription: "; Weight of 1 unit",
      shortDescription: "",
    },
  },
  "5": {
    id: "5",
    displayName: "Weight W2",
    parents: ["0", "20", "23"],
    children: [],
    priority: 2,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "6": {
    id: "6",
    displayName: "Rope t",
    parents: ["18", "24"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "7": {
    id: "7",
    displayName: "Rope x",
    parents: ["15", "22"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "8": {
    id: "8",
    displayName: "Rope y",
    parents: ["15", "16"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "9": {
    id: "9",
    displayName: "Rope z",
    parents: ["16", "19"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "10": {
    id: "10",
    displayName: "Rope p",
    parents: ["14", "17"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "11": {
    id: "11",
    displayName: "Rope q",
    parents: ["14", "20"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "12": {
    id: "12",
    displayName: "Rope s",
    parents: ["21", "23"],
    children: [],
    priority: 3,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "13": {
    id: "13",
    displayName: "Ceiling",
    parents: ["0"],
    children: ["18", "19"],
    priority: 0,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "14": {
    id: "14",
    displayName: "Pulley System A",
    parents: ["0"],
    children: ["10", "11", "1"],
    priority: 1,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "15": {
    id: "15",
    displayName: "Pulley System B",
    parents: ["0"],
    children: ["7", "8", "2"],
    priority: 1,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "16": {
    id: "16",
    displayName: "Pulley System C",
    parents: ["0"],
    children: ["8", "9", "3"],
    priority: 1,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "17": {
    id: "17",
    displayName: "Hangs: Weight W1 from Rope p",
    parents: ["0"],
    children: ["4", "10"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "18": {
    id: "18",
    displayName: "Hangs: Rope t from Ceiling",
    parents: ["0"],
    children: ["6", "13"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "19": {
    id: "19",
    displayName: "Hangs: Rope z from Ceiling",
    parents: ["0"],
    children: ["9", "13"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "20": {
    id: "20",
    displayName: "Hangs: Weight W2 from Rope q",
    parents: ["0"],
    children: ["5", "11"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "21": {
    id: "21",
    displayName: "Hangs: Pulley C from Rope s",
    parents: ["0"],
    children: ["3", "12"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "22": {
    id: "22",
    displayName: "Hangs: Pulley A from Rope x",
    parents: ["0"],
    children: ["1", "7"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "23": {
    id: "23",
    displayName: "Hangs: Weight W2 from Rope s",
    parents: ["0"],
    children: ["5", "12"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
  "24": {
    id: "24",
    displayName: "Hangs: Pulley B from Rope t",
    parents: ["0"],
    children: ["2", "6"],
    priority: 4,
    descriptionTokens: {
      label: "",
      longDescription: "",
      shortDescription: "",
    },
  },
};
