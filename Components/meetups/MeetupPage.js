function MeetUpPage(props) {
  return(
    <div>
      <h1>{props.details.title}</h1>
      <img src={props.details.image} alt={props.details.title} />
      <p>{props.details.description}</p>
      <p>{props.details.address}</p>
    </div>
  );
}

export default MeetUpPage;