import { Serializer, Deserializer } from "jsonapi-serializer";

const deserializeOptions = {
  attributes: [
    "active",
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

const serializeOptions = {
  attributes: [
    "active",
    "description",
    "name",
    "photoUrl",
    "price",
    "quantityLimit",
    "thumbnailUrl"
  ],
  keyForAttribute: "dash-case"
}

const ProductSerializer = new Serializer("products", serializeOptions);

export const serialize = data => ProductSerializer.serialize(data);

export const deserialize = data => new Deserializer(deserializeOptions).deserialize(data);
