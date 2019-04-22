export class User {
    constructor(
        public id: number,
        public role: string,
        public nom: string,
        public prenom: string,
        public email: string,
        public cpf: string,
        public ville: string,
        public quartier: string,
        public numeroMaison: string,
        public codePostale: string,
        public numeroMobile: string,
        public password: string,
        public ref_franchise: number,
    ) {}
}
