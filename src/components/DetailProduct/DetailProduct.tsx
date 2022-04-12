import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { readProduct } from "../../features/products/productSlice";
import "./DetailProduct.css";

const DetailProduct = () => {
  const product = useAppSelector<any>((state) => state.product.valueOne);
  const dispath = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispath(readProduct(id));
  }, []);
  console.log(product);

  return (
    <div className="row machine-future container-main" id="machine-feature">
      <div className="machine-future-left flex items-center">
        <div className="machine-future-image">
          <img src={product.images} alt="" />
        </div>
        <div className="machine-future-item">
          <h4>2.500+</h4>
          <p>Supercharges place along popular routes</p>
        </div>
      </div>
      <div className="machine-future-right">
        <h4>{product.name}</h4>
        <span className="text-red-600 w-full text-lg">
          Price: $ {product.price} 
        </span>
        <span className="text-white w-full text-lg">
          Speed: {product.speed} Km/h
        </span>
        <span className="text-white w-full text-lg">
          Boost: {product.boost} <small></small>
        </span>
        <span className="text-white w-full text-lg">
          Techlonogy: {product.technology} 
        </span>
        <button className="mt-4">Add to cart</button>
      </div>
    </div>
  );
};

export default DetailProduct;
