const Contact = () => {
  return ( 
    <div className="container-fluid w-50 ">
      <div className="mb-5 ">
        <label htmlFor="" className="form-label text-start" style={{ textAlign: 'left' }}>Name</label>
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
          <label htmlFor="" className="form-label ">Email</label>
          <input
              type="text"
              name=""
              id=""
              className="form-control"
              placeholder=""
              aria-describedby="helpId"
          />
      </div> 
      <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label text-left" htmlFor=""> Notify via email</label>
      </div>
      <div className="mb-3">
          <label htmlFor="" className="form-label"> Your remarks</label>
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