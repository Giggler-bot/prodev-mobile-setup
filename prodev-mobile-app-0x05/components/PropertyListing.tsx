import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard"; // Corrected path
import { useState } from "react"; // Not used here, but good practice if needed later
import { PropertListing, PropertyListingProps } from "../interfaces"; // Corrected path for interfaces

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;