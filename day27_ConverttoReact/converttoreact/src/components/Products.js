/* eslint-disable jsx-a11y/alt-text */
const Products = () => {
  return ( 
    <div className="px-2"style={{ overflowX: 'hidden' }}>
    <div className="row text-primary " >
      <div className="col-md-4 shadow-lg mt-2">
        <div className="card">
          <div className="card-body">
            <img src="imgs/product01.png" className="img-fluid"/>
            <div className="mt-3">
              <h3>$99</h3>
              <button class="btn btn-danger">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 shadow-lg mt-2">
        <div className="card">
          <div className="card-body">
            <img src="imgs/product01.png" className="img-fluid"/>
            <div className="mt-3">
              <h3>$99</h3>
              <button class="btn btn-danger">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 shadow-lg mt-2">
        <div className="card">
          <div className="card-body">
            <img src="imgs/product01.png" className="img-fluid"/>
            <div className="mt-3">
              <h3>$99</h3>
              <button class="btn btn-danger">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  <div className="row my-3" >
    
  <div className="col-md-4 shadow-lg mt-2">
      <div className="card">
        <div className="card-body">
          <img src="imgs/product02.png" className="img-fluid"/>
          <div className="mt-3">
            <h3>$99</h3>
            <button class="btn btn-danger">Buy Now</button>
          </div>
        
          
        </div>
      </div>
    </div>
    <div className="col-md-4 shadow-lg mt-2">
      <div className="card">
        <div className="card-body">
          <img src="imgs/product02.png" className="img-fluid"/>
          <div className="mt-3">
            <h3>$99</h3>
            <button class="btn btn-danger">Buy Now</button>
          </div>
        
          
        </div>
      </div>
    </div>
    <div className="col-md-4 shadow-lg mt-2">
      <div className="card">
        <div className="card-body">
          <img src="imgs/product02.png" className="img-fluid"/>
          <div className="mt-3">
            <h3>$99</h3>
            <button class="btn btn-danger">Buy Now</button>
          </div>
        
          
        </div>
      </div>
    </div>
    </div>
    </div>
   );
}
 
export default Products;