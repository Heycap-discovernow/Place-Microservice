import { Injectable } from '@nestjs/common';
import { PlaceDTO } from 'src/domain/dtos/PlaceDTO';
import { CreateManyPlaceUseCase } from 'src/domain/ports/in/CreateManyPlacesUseCase';

@Injectable()
export class CreateManyPlacesuseCaseImpl implements CreateManyPlaceUseCase {

    constructor(
        // Here we are injecting the output port as a dependency
    ) {}

    createManyPlace(places: PlaceDTO[]): Promise<PlaceDTO[]> {
        throw new Error('Method not implemented.');
    }
}