import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("favorito")
export class Favorito {

    @PrimaryGeneratedColumn()
    favoritoId: number;
    
}
