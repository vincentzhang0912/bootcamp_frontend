const IDCard = (props) => {
  return ( 
    <div>
      <div className="card text-white bg-primary mx-2 ">
      <img className="card-img-top"  src={props.isrc} alt="" />
        <div className="card-body">
          <h4 className="card-title">{props.iname}</h4>
          <p className="card-text">{props.idesc}</p>
        </div>
      </div>
      
    </div>
   );
}
 
export default IDCard;