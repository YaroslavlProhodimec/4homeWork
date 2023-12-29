import { mongoURI} from "../index";
import {MongoClient} from "mongodb";
// @ts-ignore

export const client = new MongoClient(mongoURI);

export       async function runDb() {
    try {
        await client.connect()
    } catch (e){
        await client.close()
    }
}