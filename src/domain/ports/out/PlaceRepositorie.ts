

export interface PlaceRepository {
    createManyPlaces(): Promise<void>;
    findManyPlaces(): Promise<void>;
    getPlaceById(): Promise<void>;
}