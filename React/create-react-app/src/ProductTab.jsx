import Product from "./Product";
function ProductTab(){
    // const option = ["fast","reliable"];
    let styles = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent : "center",
        alignItems : "center",

    }
    return(
        
        <div style = {styles}>
        <Product Title = "Logitech MX master" index={0} price = {30000}/>
        <Product Title = "Apple Pencil" index = {1} price={4000} />
        <Product Title = "Zebronics Transformer" index={2} price={20}/>
        <Product Title = "Portonics Toad 23" index = {3} price={20}/>
        </div>
    );
}
export default ProductTab;