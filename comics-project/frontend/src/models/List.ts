export interface List<T> {
    available?: number;
    returned?: number;
    collectionURI?: string;
    items?: T[];
}