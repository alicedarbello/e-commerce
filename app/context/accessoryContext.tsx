import React from "react";

import {AccessoryContextType} from "../types";
import SimilarProducts from "../ui/accessoriesPage/SimilarProducts";

const AccessoryContext = React.createContext<AccessoryContextType | null>(null);

export default function AccessoryContextFunction() {
  return (
    <AccessoryContext.Provider value={null}>
      <SimilarProducts />
    </AccessoryContext.Provider>
  );
}
