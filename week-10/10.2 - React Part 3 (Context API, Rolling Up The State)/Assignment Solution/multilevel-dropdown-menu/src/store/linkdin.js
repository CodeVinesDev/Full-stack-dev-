import { atom, selector } from "recoil";

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
export const allsum = selector({
  key: "sum",
  get: ({ get }) => {
    const net = get(network);
    const job = get(jobs);
    const msg = get(message);
    const notif = get(notfication);

    return net + job + msg + notif;
  },
});
