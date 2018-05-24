import "reflect-metadata";
import {ConnectionOptions} from "typeorm";

 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "den1.mysql6.gear.host",
    port: 3306,
    username: "meupedidots",
    password: "Qq6Ut9r13!-D",
    database: "meupedidots",
    entities: [
         "./entities/*.js"
    ],
    synchronize: true,
}
