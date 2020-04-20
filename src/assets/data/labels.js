export const labels = {
    artist: 'Gruppe / Kunstner',
    title: 'Titel',
    prodYear: 'Produktions år',
    label: 'Plademærke',
    origin: 'Oprindelse',
    price: 'Pris',
    recordNo: 'Pladenummer',
    numOfRecords: 'Antal lp(er)',
    released: 'Senest udgivet',
    info: 'Værd at vide',
    photo: 'Indsæt billede'
};

export const noInfo = 'Ikke oplyst';

export const inputs = [
    { label: 'Gruppe / Kunstner', name: 'artist', isRequired: 'true' },
    { label: 'Titel', name: 'title', isRequired: 'true' },
    { label: 'Produktions år', name: 'prodYear', isRequired: 'true' },
    { label: 'Pladenummer', name: 'label', isRequired: 'false' },
    { label: 'Senest udgivet', name: 'released', isRequired: 'false' },
    { label: 'Pris', name: 'price', isRequired: 'false' },
    { label: 'Antal lp', name: 'number', isRequired: 'false' },
    { label: 'Plademærke', name: 'recordNo', isRequired: 'false' }

];

export const textarea = [
    { label: 'Oprindelse', name: 'origin', isRequired: 'false' },
    { label: 'Værd at vide', name: 'info', isRequired: 'false' }

];