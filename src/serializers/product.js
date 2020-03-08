import { Serializer, Deserializer } from "jsonapi-serializer";

const options = {
  attributes: [
    "description",
    "id",
    "name",
    "photo-url",
    "price",
    "quantity-limit",
    "thumbnail-url"
  ],
  keyForAttribute: "camelCase"
};

const ProductSerializer = new Serializer("products", options);

export const serialize = data => ProductSerializer.serialize(data);

export const deserialize = data => new Deserializer(options).deserialize(data);
