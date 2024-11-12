import { PlaceDTO } from "src/domain/dtos/PlaceDto";


export interface FilterExistingPlacesUseCase {
    filterExistingPlaces(places: PlaceDTO[]): Promise<PlaceDTO[]>;
}