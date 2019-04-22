export class Franchise {
    constructor(
        public id: number,
        public nom: string,
        public cNPJ: string,
        public email: string,
        public type: string,
        public pays: string,
        public ville: string,
        public quartier: string,
        public cEP: string,
        public adresse: string,
        public primaire: string,
        public secondaire: string,
    ) {}
}
