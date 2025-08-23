import "./Product.css"
import Price from "./Price";
function Product({Title,index,price =1 ,features}){
    // let styles = {backgroundColor : price > 20000 ? "grey" : ""};
    const description = ["8000 DPI","Intutive touch surface","Designed for ipad pro","Wire less mouse"];
    let oldPrices = ["3000","4000","5000","6000"];
    let newPrices = ["2000","3000","4000","5000"];
    return (
        // <div className="Product" style={styles}>
        // <h2>Product : {Title}</h2>
        // <h5>Price : {price}</h5>
        // <ul>{features.map((feature)=><li>{feature}</li>)}</ul>
        // {price > 20000 && <p>Discount of 5%</p>}
        // </div>  
        <div className="Product">
            <h4>{Title}</h4>
            <p>{description[index]}</p>
            <p>{description[index]}</p>
            <Price oldPrice = {oldPrices[index]} newPrice = {newPrices[index]}></Price>
        </div>
    );
}

export default Product;