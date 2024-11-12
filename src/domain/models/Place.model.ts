import { IsString, IsNumber, IsArray, IsDecimal, IsOptional, IsUUID, IsLatitude, IsLongitude} from 'class-validator';
import { v4 as uuidv4 } from 'uuid';



export class Place {

  @IsUUID('4')
  place_uuid: string;

  @IsString()
  google_uuid: string;

  @IsString()
  name: string;

  @IsString()
  photo_uri: string;

  @IsDecimal()
  rating: number;

  @IsString()
  vicinity: string;

  @IsLatitude()
  lat: string;

  @IsLongitude()
  lng: string;

  @IsArray()
  @IsString({ each: true })
  types: string[];

  @IsString()
  @IsOptional()
  cost: string = "0";

  constructor(
    google_id: string,
    name: string,
    photo_uri: string,
    rating: number,
    vicinity: string,
    lat: string,
    lng: string,
    types: string[],
    cost: string


    // VALUE OBJECTS
    //   @IsArray()
    //   dislikes: any[];

    //   @IsArray()
    //   likes: any[];

    //   @IsArray()
    //   views: any[];
  ) { 

    this.place_uuid = uuidv4();

    this.google_uuid = google_id;
    this.name = name;
    this.photo_uri = photo_uri;
    this.rating = rating;
    this.vicinity = vicinity;
    this.lat = lat;
    this.lng = lng;
    this.types = types;
    this.cost = cost;
  }







}