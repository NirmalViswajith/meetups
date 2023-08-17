import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      const client = await MongoClient.connect('mongodb+srv://new-user_01:qCJuAX5MyTAd5PBD@cluster0.4nbdx5u.mongodb.net/?retryWrites=true&w=majority');
      
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup Inseted" });
    } catch (error) {
      console.error('Error inserting meetup:', error);
      res.status(500).json({ message: 'Error inserting meetup' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
