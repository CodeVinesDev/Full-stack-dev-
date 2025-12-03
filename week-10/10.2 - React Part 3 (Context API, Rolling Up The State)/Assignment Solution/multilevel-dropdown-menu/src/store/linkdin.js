import { atom } from "recoil";

export const notfication = atom({
  key: "notfication",
  default: 107,
});

export const network = atom({
  key: "network",
  default: 0,
});

export const jobs = atom({
  key: "job",
  default: 0,
});

export const message = atom({
  key: "message",
  default: 0,
});
