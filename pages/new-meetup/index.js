'use client'
import NewMeetupForm from "@/Components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredValue) {
    console.log(enteredValue);
    try {
      const response = await fetch('/api/meetups', {
        method: 'POST',
        body: JSON.stringify(enteredValue),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error adding meetup:', error);
    }
  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  );
}

export default NewMeetupPage;
