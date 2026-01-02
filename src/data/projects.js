export const projects = [
  {
    id: "poseidon",
    name: "Poseidon",
    description:
      "python based container orchestration engine for ephemeral CTF workloads",
    stack: ["python", "docker"],
    status: "archived",
  },
  {
    id: "beacon",
    name: "Beacon",
    description:
      "local-first android app to track location and photo-tagged attendance for employees in a remote farm",
    stack: ["android", "fastapi", "azure"],
    status: "done",
  },
  {
    id: "vault",
    name: "Vault",
    description:
      "interactive command-line file vault with authenticated encryption and persistent encrypted state",
    stack: ["c++", "openssl", "vcpkg"],
    status: "done",
  },
  {
    id: "haven-client",
    name: "Haven",
    description:
      "ephemeral peer-to-peer group chat using a temporary host and in-memory message storage",
    stack: ["c#", ".net", "winui", "asp.net"],
    status: "experimental",
  },
  {
    id: "splitkaro",
    name: "SplitKaro",
    description:
      "lightweight offline-first web app for tracking and splitting shared expenses",
    stack: ["javascript", "html", "tailwind", "indexeddb"],
    status: "active",
  },
  {
    id: "evs-wordle",
    name: "EVS Wordle",
    description:
      "educational word-guessing game focused on environmental science terms",
    stack: ["javascript", "html", "css", "fastapi"],
    status: "academic",
  },
];
