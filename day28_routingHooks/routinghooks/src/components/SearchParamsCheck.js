import { useSearchParams } from "react-router-dom";


const SearchParamsCheck = () => {


    // read query string and access it using get method


    // URL must be-
    // http://localhost:3000/searchparams?name=siri&job=techdev
    //  query string = name=siri&job=techdev


    // uses URLSearchParams
    let [searchparams, setSearchParams] = useSearchParams();
    console.log(searchparams);
    console.log(searchparams.get("name"));
    return (
        <div>
            <h1> Search Params Check</h1>
            <h3> Name is {searchparams.get("name")}</h3>
            <h3> Job  is {searchparams.get("job")}</h3>
        </div>
     );
}
 
export default SearchParamsCheck;
