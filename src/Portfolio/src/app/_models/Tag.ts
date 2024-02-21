export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
    static readonly BOOTSTRAP = new Tag('Bootstrap', 'darkblue');
    static readonly CSS = new Tag('CSS', 'gray');

    private constructor(
        private readonly key: string,
        public readonly color: string
    ) {};

    toString() {
        return this.key;
    };

}