export default interface RepositoryInterface<T> {
    create(entity: T): Promise<void>;
    find(entity: T): Promise<void>;
    update(id: string): Promise<T>;
    findAll(): Promise<T[]>;
}