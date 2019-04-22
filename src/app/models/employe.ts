export class Employe {
    constructor(
        public id: number,
        public cpf: string,
        public empresa: string,
        public email: string,
        public recrutement: string,
        public pays: string,
        public ville: string,
        public ref_franchise: number,
        public cep: string,
        public adresse: string,
        public primaire: string,
        public secondaire: string,
    ) {}
}
