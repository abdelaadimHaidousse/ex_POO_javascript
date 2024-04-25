class Batiment {
  constructor(adresse, prix, superficie) {
    this.adresse = adresse;
    this.prix = prix;
    this.superficie = superficie;
  }

  // Accessors (getters)
  getAdresse() {
    return this.adresse;
  }

  getPrix() {
    return this.prix;
  }

  getSuperficie() {
    return this.superficie;
  }

  // Modifiers (setters)
  setAdresse(adresse) {
    this.adresse = adresse;
  }

  setPrix(prix) {
    this.prix = prix;
  }

  setSuperficie(superficie) {
    this.superficie = superficie;
  }

  // Affichage method
  afficher() {
    console.log(`Adresse: ${this.adresse}`);
    console.log(`Prix: ${this.prix}`);
    console.log(`Superficie: ${this.superficie}`);
  }
}

class Maison extends Batiment {
  constructor(adresse, prix, superficie, nbEtages) {
    super(adresse, prix, superficie);
    this.nbEtages = nbEtages;
  }

  getNbEtages() {
    return this.nbEtages;
  }

  setNbEtages(nbEtages) {
    this.nbEtages = nbEtages;
  }

  afficher() {
    super.afficher(); 
    console.log(`Nombre d'étages: ${this.nbEtages}`);
  }
}

class Appartement extends Batiment {
  constructor(adresse, prix, superficie, numeroEtage, nbChambres) {
    super(adresse, prix, superficie);
    this.numeroEtage = numeroEtage;
    this.nbChambres = nbChambres;
  }


  getNumeroEtage() {
    return this.numeroEtage;
  }

  getNbChambres() {
    return this.nbChambres;
  }

  setNumeroEtage(numeroEtage) {
    this.numeroEtage = numeroEtage;
  }

  setNbChambres(nbChambres) {
    this.nbChambres = nbChambres;
  }

  afficher() {
    super.afficher(); 
    console.log(`Numéro d'étage: ${this.numeroEtage}`);
    console.log(`Nombre de chambres: ${this.nbChambres}`);
  }
}
