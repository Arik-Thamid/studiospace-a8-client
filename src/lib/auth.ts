import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins"
import { mongodbAdapter } from "better-auth/adapters/mongodb";



const client = new MongoClient("mongodb://studiospace:vGzd5qwkJGp6qbux@ac-u2c6ij1-shard-00-00.d2qfkc8.mongodb.net:27017,ac-u2c6ij1-shard-00-01.d2qfkc8.mongodb.net:27017,ac-u2c6ij1-shard-00-02.d2qfkc8.mongodb.net:27017/?ssl=true&replicaSet=atlas-9l7rke-shard-0&authSource=admin");
const db = client.db("studiospace");



export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: { 
    enabled: true, 
  }, 
  plugins: [
        jwt(), 
    ],
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 7*24*60*60// Cache duration in seconds (5 day)
        }
    }
});