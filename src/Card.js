import "./Card.css";

export default function(props){
    return(
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.img} className="img-fluid rounded-start" alt="product-Image"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text"><strong>{props.price}</strong></p>
              <p className="card-text"><small className="text-muted">rating: {props.rating.rate}, count: {props.rating.count}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}