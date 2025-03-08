import { MongoClient } from "mongodb"

const uri: string = process.env.MONGODB_URI ?? ""
const dbName: string = process.env.MONGODB_DB ?? ""

if (!uri) throw new Error("Please define MONGODB_URI in .env.local")
if (!dbName) throw new Error("Please define MONGODB_DB in .env.local")

let cachedClient: MongoClient | null = null

export async function connectToDatabase() {
    if (cachedClient) return { client: cachedClient, db: cachedClient.db(dbName) }
    
    const client = new MongoClient(uri)
    await client.connect()

    cachedClient = client
    console.log("MongoDB Connected!")
    return {client, db: client.db(dbName)}
}