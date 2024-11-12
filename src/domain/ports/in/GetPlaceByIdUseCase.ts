import { PlaceDTO } from "src/domain/dtos/PlaceDto";


export interface GetPlaceByIdUseCase {
    getPlaceById(places: PlaceDTO[]): Promise<PlaceDTO[]>;
}