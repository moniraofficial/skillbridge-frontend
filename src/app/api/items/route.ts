import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

// ১. ডাটাবেজ থেকে সব আইটেম রিড করার জন্য GET মেথড
export async function GET() {
  try {
    await client.connect();
    const database = client.db('skillbridge'); // আপনার ডিলিট ফাইলের মতোই ডাটাবেজ নাম 'skillbridge'
    const collection = database.collection('skills'); // কালেকশন নাম 'skills'

    // ডাটাবেজের সব স্কিল বা আইটেম নিয়ে আসা
    const items = await collection.find({}).toArray();
    
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error('Fetch Items Error:', error);
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  } finally {
    await client.close();
  }
}