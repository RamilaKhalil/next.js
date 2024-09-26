export default function review({
    params
}:{
    params :{productId : string
             reviewId : string
    };
}) {
    return(
        <h1>product {params.productId} and review {params.reviewId}</h1>
    )
}