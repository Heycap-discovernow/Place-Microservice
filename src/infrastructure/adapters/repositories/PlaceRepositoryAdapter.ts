import { OnModuleInit, Injectable } from "@nestjs/common";

import { PlaceRepository } from "src/domain/ports/out/PlaceRepositorie";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PlaceRepositoryAdapter extends PrismaClient implements PlaceRepository, OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    createManyPlaces(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findManyPlaces(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getPlaceById(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}