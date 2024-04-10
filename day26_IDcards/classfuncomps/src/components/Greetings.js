const Greetings = (props) => {
  return ( 
    <div>
      <h2 style={{backgroundColor:'yellow'}}>Hello {props.name}</h2>
      <h2 id='myygreen'>Hello {props.name}</h2>
      <h2 className="bg-primary">again </h2>
      
    </div>
   );
}
 
export default Greetings;