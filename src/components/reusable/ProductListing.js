import React from "react";

const mockedProps = {
  name: "Bourbon BBQ Grander Box",
  thumbnailUrl:
    "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/img%2FKFC%2FWeb%2FWEB%2Fprodukt%2Fgrander-texas.png",
  price: 31.95
};

const ProductListing = props => {
  const { name, thumbnailUrl, price } = mockedProps;

  const productPrice = `${price} zł`;

  return (
    <div key={name} className="p-listing -border-bottom">
      <img
        className="p-listing__thumbnail"
        src={thumbnailUrl}
        alt="Product Thumbnail"
      />

      <div className="p-listing__content">
        <h2 className="p-listing__heading">{name}</h2>

        <div className="p-listing__footer">
          <span className="p-listing__quantity">
            <input type="submit" value="-" readOnly />

            <input type="text" value="1" readOnly />

            <input type="submit" value="+" readOnly />
          </span>
          <span className="p-listing__price">{productPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
