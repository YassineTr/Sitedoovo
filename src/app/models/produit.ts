export class Produit {
    public image: string;
    constructor(
        public id: number,
        public nom: string,
        public quantite: number,
        public price: number,
        public frequence: string,
        public entre: string,
        public update: string
    ) {}
}
