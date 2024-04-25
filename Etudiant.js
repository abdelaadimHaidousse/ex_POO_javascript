class Etudiant {
    constructor(cne, nom, prenom, niveau) {
        this._cne = cne;
        this._nom = nom;
        this._prenom = prenom;
        this._niveau = niveau;
    }

    affichage() {
        console.log("CNE:", this._cne);
        console.log("Nom:", this._nom);
        console.log("Prénom:", this._prenom);
        console.log("Niveau:", this._niveau);
    }

    equal(other) {
        return this._cne === other._cne;
    }

    // Accesseurs et modificateurs
    get cne() {
        return this._cne;
    }

    set cne(value) {
        this._cne = value;
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

    get niveau() {
        return this._niveau;
    }

    set niveau(value) {
        this._niveau = value;
    }
}

const etudiant1 = new Etudiant("1AGAVF44", "Yassine", "mazhare", "Licence");
const etudiant2 = new Etudiant("EE8492", "another", "human", "deug");

etudiant1.affichage();
etudiant2.affichage();
