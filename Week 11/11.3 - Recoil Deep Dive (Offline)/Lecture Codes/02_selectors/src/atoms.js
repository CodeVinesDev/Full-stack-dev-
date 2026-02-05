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





