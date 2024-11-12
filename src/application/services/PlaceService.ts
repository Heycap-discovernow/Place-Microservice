import { Injectable } from '@nestjs/common';
import { PlaceDTO } from 'src/domain/dtos/PlaceDTO';

import { CreateManyPlaceUseCase} from 'src/domain/ports/in/CreateManyPlacesUseCase';
import { FilterExistingPlacesUseCase } from 'src/domain/ports/in/FilterExistingPlacesUseCase';
import { GetPlaceByIdUseCase } from 'src/domain/ports/in/GetPlaceByIdUseCase';

@Injectable()
export class PlaceService implements CreateManyPlaceUseCase, FilterExistingPlacesUseCase, GetPlaceByIdUseCase {
  
    constructor(
        // inject dependencies
    ) {}

    getPlaceById(places: PlaceDTO[]): Promise<PlaceDTO[]> {
        throw new Error('Method not implemented.');
    }

    createManyPlace(places: PlaceDTO[]): Promise<PlaceDTO[]> {
        throw new Error('Method not implemented.');
    }
    
    filterExistingPlaces(places: PlaceDTO[]): Promise<PlaceDTO[]> {
        throw new Error('Method not implemented.');
    }

    
}