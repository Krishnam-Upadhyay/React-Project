
let productCont = 0;
const imageUrl = 'https://t4.ftcdn.net/jpg/01/16/43/63/360_F_116436349_MgOzZrTJ5mL9hfDVYQS1ZNiVX9kygFjt.jpg';

const style = {
    padding: '0px 20px',
    fontSize: 14
}



const Products = (props) => {


    let badgeClass = 'badge-margin-left-240 badge ';

    return (<ul class="list-group shadow">
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.description}</p>
                    <div className="d-flex align-items-center justify-content-start mt-1">
                        <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>${props.price}</h6>
                        <button type="button" className="btn btn-primary">-</button>
                        <span style={style}>{productCont}</span>
                        <button type="button" className="btn btn-primary">+</button>
                        <span className={badgeClass + (props.isAvailable ? 'bg-success' : 'bg-danger')}>{props.isAvailable ? "Available" : "UnAvailable"}</span>
                    </div>
                </div><img src={props.imageUrl} alt="Generic placeholder image" width="200" height='200' class="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>
    </ul>);
}
export default Products;