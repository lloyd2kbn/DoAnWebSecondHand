import { useEffect,useState } from "react";
import { doGet } from "../../../../utils/api/api";


export default function useProductDetail(id){
    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(true);
   
   useEffect(()=>{
        (async () => {
                try {
                    setLoading(true);
                    const {data} =await doGet(`product/product-detail/${id}`);
                   setProduct(data.data);
                } catch (error) {
                    console.log("failed to fetch  product",error);
                }
        })()

   },[id])
   return {product,loading};
}