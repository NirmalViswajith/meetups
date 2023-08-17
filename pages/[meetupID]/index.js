'use client'

import { useRouter } from 'next/router';
import MeetUpPage from '@/Components/meetups/MeetupPage';
const meetupList = [
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

function meetupDetails() {
  const router = useRouter();
  const { meetupID } = router.query;
  const showDetails = meetupList.find((details) => details.id === meetupID);

  if (!showDetails) {
    return <p>No meetup found</p>;
  }

  return (
    <MeetUpPage details={showDetails} />
  );
}
export async function generateStaticParams() {
  return [
    {
      meetupID: '1'
    },
    {
      meetupID: '2'
    }
  ]
}
export const dynamicParams = false;

export default meetupDetails;
