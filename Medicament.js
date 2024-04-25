class Produit {
  constructor(reference, prix, quantite) {
    this.reference = reference;
    this.prix = prix;
    this.quantite = quantite;
  }

  getReference() {
    return this.reference;
  }

  getPrix() {
    return this.prix;
  }

  getQuantite() {
    return this.quantite;
  }


  setReference(reference) {
    this.reference = reference;
  }

  setPrix(prix) {
    this.prix = prix;
  }

  setQuantite(quantite) {
    this.quantite = quantite;
  }

  afficher() {
    console.log(`Référence: ${this.reference}`);
    console.log(`Prix: ${this.prix}`);
    console.log(`Quantité: ${this.quantite}`);
  }
}

class Medicament extends Produit {
  constructor(reference, prix, quantite, nom, molecule) {
    super(reference, prix, quantite);
    this.nom = nom;
    this.molecule = molecule;
  }


  getNom() {
    return this.nom;
  }

  getMolecule() {
    return this.molecule;
  }


  setNom(nom) {
    this.nom = nom;
  }

  setMolecule(molecule) {
    this.molecule = molecule;
  }

 
  afficher() {
    super.afficher();
    console.log(`Nom: ${this.nom}`);
    console.log(`Molécule: ${this.molecule}`);
  }
}

class ParaPharm extends Produit {
  constructor(reference, prix, quantite, type) {
    super(reference, prix, quantite);
    this.type = type;
  }


  getType() {
    return this.type;
  }


  setType(type) {
    this.type = type;
  }


  afficher() {
    super.afficher(); 
    console.log(`Type: ${this.type}`);
  }
}
