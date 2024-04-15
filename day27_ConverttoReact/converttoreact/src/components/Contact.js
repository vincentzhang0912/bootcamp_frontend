const Contact = () => {
  return ( 
    <div className="container-fluid w-50  h-100 my-5" style={{ textAlign: 'left' }}>
      <div className="mb-3 ">
        <label htmlFor="" className="form-label text-start" >Name :</label>
        <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
        />
      </div>
      <div className="mb-3">
          <label htmlFor="" className="form-label ">Email :</label>
          <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
          />
      </div> 
    
      <div className="mb-3">
          <label htmlFor="" className="form-label"> Your remarks :</label>
          <textarea className="form-control" name="" id="" rows="3"></textarea>
      </div>
    <button
      type="submit"
      className="btn btn-primary mb-5"
    >
      Submit
    </button>
    </div>
   );
}
 
export default Contact;