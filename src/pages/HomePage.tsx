import React from "react";
import BannerBottom from "../components/BannerBottom";
import CarouselCars from "../components/CarouselCars";
import FeatureLuxury from "../components/FeatureLuxury";
import ListBrand from "../components/ListBrand";
import MachineFuture from "../components/MachineFuture";
import MoreFuture from "../components/MoreFuture";
import ProductNew from "../components/ProductNew";

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
