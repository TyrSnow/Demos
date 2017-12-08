export class IList<T> {
    list: T[]
    index: number
    size: number
    total: number
}
export class List {
    constructor(
        public list: any[],
        public index: number,
        public size: number,
        public total: number
    ) {
    }
}