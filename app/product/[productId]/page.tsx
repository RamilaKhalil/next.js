export default function product({
    params
} :{
    params :{productId : string};
})
{
    return(
        <h1>product detail id {params.productId}</h1>
        
    )
}