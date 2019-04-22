export class Mail {
    constructor(
        public id: number,
        public subject: string,
        public sender: string,
        public content: string,
        public sendFrom: string,
    ) {}
}
