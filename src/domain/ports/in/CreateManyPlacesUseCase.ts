import { PlaceDTO } from "src/domain/dtos/PlaceDto";


export interface CreateManyPlaceUseCase {
    createManyPlace(places: PlaceDTO[]): Promise<PlaceDTO[]>;
}