import { Injectable } from '@nestjs/common';
import { PlaceDTO } from 'src/domain/dtos/PlaceDTO';
import { GetPlaceByIdUseCase } from 'src/domain/ports/in/GetPlaceByIdUseCase';

@Injectable()
export class GetPlaceByIdImpl implements GetPlaceByIdUseCase {

    constructor(
        // Here we are injecting the output port as a dependency
    ) {}

    getPlaceById(places: PlaceDTO[]): Promise<PlaceDTO[]> {
        throw new Error('Method not implemented.');
    }
}