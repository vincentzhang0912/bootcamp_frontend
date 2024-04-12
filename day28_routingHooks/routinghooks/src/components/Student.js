import { useParams } from "react-router-dom";


const Student = () => {
    // get the id from the url
    let params = useParams();
    console.log(params);




    // print it to see if we got it
    console.log(params.id);
    // fetch from DB student info for that id
    // show that info in return below




    return (  
    <div>
        {/* Below info should have been fetched from DB based on id - {params.id} */}
        <h1> Student Info!</h1>
        <h3> ID : {params.id}</h3>
        <h3> Name: {params.name}</h3>
    </div>);
}
 
export default Student;
