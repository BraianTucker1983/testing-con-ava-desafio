import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});

test("Testeo la clase User y sus métodos", (t) => {
  const matilda = new User("Matilda");
  const product = new Product("Product 1", 10);

  t.is(matilda.name, "Matilda");

  // Agregar el producto a la lista de productos del usuario
  matilda.addProduct(product);

  // Verificar que el producto fue agregado correctamente
  t.is(matilda.products[0].name, "Product 1");
  t.is(matilda.products[0].price, 10);
});
