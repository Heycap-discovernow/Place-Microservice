import { Injectable } from '@nestjs/common';
import { PlaceDTO } from 'src/domain/dtos/PlaceDTO';
import { FilterExistingPlacesUseCase } from 'src/domain/ports/in/FilterExistingPlacesUseCase';

@Injectable()
export class FilterExistingPlacesImpl implements FilterExistingPlacesUseCase {

    constructor(
        // Here we are injecting the output port as a dependency
    ) {}

    filterExistingPlaces(places: PlaceDTO[]): Promise<PlaceDTO[]> {
        throw new Error('Method not implemented.');
    }
}