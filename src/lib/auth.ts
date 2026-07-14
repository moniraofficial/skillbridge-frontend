

// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// // import { client } from "@/db"; // your mongodb client
// import { client } from "skillbridge"; // your mongodb client





// export const auth = betterAuth({
//     database: mongodbAdapter(client),
// });

// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI as string);
// export const db = client.db("skillbridge");
// console.log(process.env.MONGODB_URI);
// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
    
//     client
//   }),
//   emailAndPassword: {
//     enabled: true
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
//     }
//   }

// });


import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in your .env file!");
}

const client = new MongoClient(process.env.MONGODB_URI);
export const db = client.db("skillbridge");

export const auth = betterAuth({
  // মঙ্গোডিবির কালেকশনগুলোকে সরাসরি ম্যাপ করে দেওয়া হলো যাতে Internal Server Error না আসে
  database: mongodbAdapter(db, {
    collections: {
      user: "users",
      session: "sessions",
      account: "accounts",
      verification: "verifications",
    },
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }
  }
});