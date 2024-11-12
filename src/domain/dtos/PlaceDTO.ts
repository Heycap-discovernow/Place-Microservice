export class PlaceDTO {
    constructor(
    public google_id: string,
    public name: string,
    public photo: string,
    public rating: number,
    public vicinity: string,
    public lat: number,
    public lng: number,
    public types: string[],
    public cost: string
    ) {}
}