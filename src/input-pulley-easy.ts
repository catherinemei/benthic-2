import { Hypergraph } from "./priority-traversal-types";

export const pulleyHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Pulley diagram",
    description: ". A mechanical system consisting of pulleys, ropes, and boxes.",
    parents: [],
    children: [
      "1", "2", "3", "4", "5", "6", "7",
      "18", "19", "20", "21", "22", "23", "24", "25"
    ],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Pulley System A",
    description: "; Contains 3 objects.",
    parents: ["0"],
    children: ["8", "15", "10"],
    priority: 0,
  },
  "2": {
    id: "2",
    displayName: "Pulley System B",
    description: "; Contains 3 objects.",
    parents: ["0"],
    children: ["10", "16", "11"],
    priority: 0,
  },
  "3": {
    id: "3",
    displayName: "Pulley System C",
    description: "; Contains 3 objects.",
    parents: ["0"],
    children: ["11", "17", "13"],
    priority: 0,
  },
  "4": {
    id: "4",
    displayName: "Box B1",
    description: "; Weight of 3 units.",
    parents: ["0", "18"],
    children: [],
    priority: 0,
  },
  "5": {
    id: "5",
    displayName: "Box B2",
    description: "",
    parents: ["0", "21"],
    children: [],
    priority: 0,
  },
  "6": {
    id: "6",
    displayName: "Ceiling",
    description: "",
    parents: ["0", "22", "23"],
    children: [],
    priority: 0,
  },
  "7": {
    id: "7",
    displayName: "Floor",
    description: "",
    parents: ["0", "25"],
    children: [],
    priority: 0,
  },
  "8": {
    id: "8",
    displayName: "Rope p",
    description: "",
    parents: ["1", "18"],
    children: [],
    priority: 0,
  },
  "9": {
    id: "9",
    displayName: "Rope q",
    description: "",
    parents: ["19", "22"],
    children: [],
    priority: 0,
  },
  "10": {
    id: "10",
    displayName: "Rope r",
    description: "",
    parents: ["1", "2"],
    children: [],
    priority: 0,
  },
  "11": {
    id: "11",
    displayName: "Rope s",
    description: "",
    parents: ["2", "3"],
    children: [],
    priority: 0,
  },
  "12": {
    id: "12",
    displayName: "Rope t",
    description: "",
    parents: ["20", "23"],
    children: [],
    priority: 0,
  },
  "13": {
    id: "13",
    displayName: "Rope u",
    description: "",
    parents: ["3", "21"],
    children: [],
    priority: 0,
  },
  "14": {
    id: "14",
    displayName: "Rope v",
    description: "",
    parents: ["24", "25"],
    children: [],
    priority: 0,
  },
  "15": {
    id: "15",
    displayName: "Pulley A",
    description: "",
    parents: ["1", "19"],
    children: [],
    priority: 0,
  },
  "16": {
    id: "16",
    displayName: "Pulley B",
    description: "",
    parents: ["2", "24"],
    children: [],
    priority: 0,
  },
  "17": {
    id: "17",
    displayName: "Pulley C",
    description: "",
    parents: ["3", "20"],
    children: [],
    priority: 0,
  },
  "18": {
    id: "18",
    displayName: "Box B1 hangs from Rope p",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["4", "8"],
    priority: 0,
  },
  "19": {
    id: "19",
    displayName: "Pulley A hangs from Rope q",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["15", "9"],
    priority: 0,
  },
  "20": {
    id: "20",
    displayName: "Pulley C hangs from Rope t",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["17", "12"],
    priority: 0,
  },
  "21": {
    id: "21",
    displayName: "Box B2 hangs from Rope u",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["5", "13"],
    priority: 0,
  },
  "22": {
    id: "22",
    displayName: "Rope q hangs from ceiling",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["9", "6"],
    priority: 0,
  },
  "23": {
    id: "23",
    displayName: "Rope t hangs from ceiling",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["12", "6"],
    priority: 0,
  },
  "24": {
    id: "24",
    displayName: "Pulley B is anchored to Rope v",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["16", "14"],
    priority: 0,
  },
  "25": {
    id: "25",
    displayName: "Rope v is anchored to Floor",
    description: "; Contains 2 objects.",
    parents: ["0"],
    children: ["14", "7"],
    priority: 0,
  },
};
