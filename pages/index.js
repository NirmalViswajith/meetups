import MeetupList from "@/Components/meetups/MeetupList";
import Layout from "@/Components/layout/Layout";
import { MongoClient } from "mongodb";
let DUMMY_LIST = [
  {
    id: '1',
    title: 'first meetup',
    image: 'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
    address: 'someaddress',
    description: 'lets meet up there'
  },
  {
    id: '2',
    title: 'second meetup',
    image: 'https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg',
    address: 'someaddress 2.0',
    description: 'lets meet up there'
  }
]
function Homepage(props) {
  return (
    
      <MeetupList meetuplist={props.meetups} />
    
  );
}

export async function getStaticProps() {
  // fetch data from API

  const client = await MongoClient.connect(
    "mongodb+srv://new-user_01:qCJuAX5MyTAd5PBD@cluster0.4nbdx5u.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  return {
    props: {
      meetups: meetups.map((item) => ({
        title: item.title,
        address: item.address,
        image: item.image,
        description: item.description,
        id: item._id.toString(),
      })),
    },
    revalidate: 1,
  };
}


export default Homepage;