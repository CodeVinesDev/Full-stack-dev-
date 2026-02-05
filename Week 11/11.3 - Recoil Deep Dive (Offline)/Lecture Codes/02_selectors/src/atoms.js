// Import the atom and selector functions from the 'recoil' package
import { atom, selector } from 'recoil';

// Define an atom for managing the network notification count and export it
export const networkAtom = atom({
    // Unique key for identifying the atom
    key: 'networkAtom',
    // Default value for the atom
    default: 102,
});

// Define an atom for managing the job notification count and export it
export const jobsAtom = atom({
    // Unique key for identifying the atom
    key: 'jobsAtom',
    // Default value for the atom
    default: 0,
});

// Define an atom for managing the general notification count and export it
export const notificationsAtom = atom({
    // Unique key for identifying the atom
    key: 'notificationsAtom',
    // Default value for the atom
    default: 12,
});

// Define an atom for managing the messaging notification count and export it
export const messagingAtom = atom({
    // Unique key for identifying the atom
    key: 'messagingAtom',
    // Default value for the atom
    default: 0,
});

