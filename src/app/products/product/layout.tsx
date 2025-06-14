import HeadersButtons from "@/app/components/HeadersButtons";
import React, { ReactNode } from "react";

const ProductLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <HeadersButtons/>
      <div>{children}</div>;
    </>
  );
};

export default ProductLayout;
