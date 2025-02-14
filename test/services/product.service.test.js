import ProductService from "../../src/services/product.service";
import Product from "../../src/models/product.model";
import { describe, jest } from "@jest/globals";

jest.mock("../../src/models/product.model");

describe("Product Service", () => {
    describe("createProduct", () => {
        it("should return the product created", async () => {
            const product = {
                name: "Product Test",
                description: "Product Test Description",
                price: 10.0,
                category: "Food",
            };

            Product.create.mockResolvedValue(product);

            const result = await ProductService.createProduct(product);

            expect(result).toEqual(product);
        });

        it("should throw an error when an error occurs", async () => {
            const product = {
                name: "Product Test",
                description: "Product Test Description",
                price: 10.0,
                category: "Food",
            };

            Product.create.mockRejectedValue(new Error("Error"));

            await expect(ProductService.createProduct(product)).rejects.toThrow("Error");
        });
    });

    describe("getProducts", () => {
        it("should return a list of products", async () => {
            const products = [
                {
                    name: "Product Test",
                    description: "Product Test Description",
                    price: 10.0,
                    category: "Food",
                },
                {
                    name: "Product Test 2",
                    description: "Product Test Description 2",
                    price: 20.0,
                    category: "Drink",
                },
            ];

            Product.find.mockResolvedValue(products);

            const result = await ProductService.getProducts();

            expect(result).toEqual(products);
        });

        it("should throw an error when an error occurs", async () => {
            Product.find.mockRejectedValue(new Error("Error"));

            await expect(ProductService.getProducts()).rejects.toThrow("Error");
        });
    });

    describe("findByIdProduct", () => {
        it("should return the product found", async () => {
            const product = {
                name: "Product Test",
                description: "Product Test Description",
                price: 10.0,
                category: "Food",
            };

            Product.findById.mockResolvedValue(product);

            const result = await ProductService.findByIdProduct("id");

            expect(result).toEqual(product);
        });

        it("should throw an error when an error occurs", async () => {
            Product.findById.mockRejectedValue(new Error("Error"));

            await expect(ProductService.findByIdProduct("id")).rejects.toThrow("Error");
        });
    });

    describe("updateProduct", () => {
        it("should return the product updated", async () => {
            const product = {
                name: "Product Test",
                description: "Product Test Description",
                price: 10.0,
                category: "Food",
            };

            Product.findByIdAndUpdate.mockResolvedValue(product);

            const result = await ProductService.updateProduct("id", product);

            expect(result).toEqual(product);
        });

        it("should throw an error when an error occurs", async () => {
            const product = {
                name: "Product Test",
                description: "Product Test Description",
                price: 10.0,
                category: "Food",
            };

            Product.findByIdAndUpdate.mockRejectedValue(new Error("Error"));

            await expect(ProductService.updateProduct("id", product)).rejects.toThrow("Error");
        });
    });
});