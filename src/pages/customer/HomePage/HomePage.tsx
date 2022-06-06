import React from "react";
import BannerBottom from "../../../components/customer/BannerBottom/BannerBottom";
import CarouselCars from "../../../components/customer/CarouselCars/CarouselCars";
import FeatureLuxury from "../../../components/customer/FeatureLuxury/FeatureLuxury";
import ListBrand from "../../../components/customer/ListBrand/ListBrand";
import MachineFuture from "../../../components/customer/MachineFuture/MachineFuture";
import MoreFuture from "../../../components/customer/MoreFuture/MoreFuture";
import ProductNew from "../../../components/customer/ProductNew/ProductNew";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <ProductNew />
      <MachineFuture />
      <CarouselCars />
      <MoreFuture />
      <FeatureLuxury />
      <BannerBottom />
      <ListBrand />
    </div>
  );
};

export default HomePage;
