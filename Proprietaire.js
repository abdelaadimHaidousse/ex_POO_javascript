
class Proprietaire {
    constructor(nom, prenom, age, CIN) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._CIN = CIN;
    }

    affichage() {
        console.log("Nom:", this._nom);
        console.log("Prénom:", this._prenom);
        console.log("Âge:", this._age);
        console.log("CIN:", this._CIN);
    }

    equal(other) {
        return this._CIN === other._CIN;
    }

    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value) {
        this._prenom = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get CIN() {
        return this._CIN;
    }

    set CIN(value) {
        this._CIN = value;
    }
}


class Maison {
    constructor(adresse, nbEtages, nbChambres) {
        this._adresse = adresse;
        this._nbEtages = nbEtages;
        this._nbChambres = nbChambres;
    }

    affichage() {
        console.log("Adresse:", this._adresse);
        console.log("Nombre d'étages:", this._nbEtages);
        console.log("Nombre de chambres:", this._nbChambres);
    }

    // Accesseurs et modificateurs
    get adresse() {
        return this._adresse;
    }

    set adresse(value) {
        this._adresse = value;
    }

    get nbEtages() {
        return this._nbEtages;
    }

    set nbEtages(value) {
        this._nbEtages = value;
    }

    get nbChambres() {
        return this._nbChambres;
    }

    set nbChambres(value) {
        this._nbChambres = value;
    }
}

const proprietaire1 = new Proprietaire("abdo", "salmi", 40, "123456789");
const proprietaire2 = new Proprietaire("mohamed hhh", "nachit", 35, "987654321");



proprietaire1.affichage();
proprietaire2.affichage();

console.log("Les propriétaires ont le même CIN ?", proprietaire1.equal(proprietaire2));
