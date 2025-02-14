import ProductController from '../../src/controllers/product.controller';
import ProductService from '../../src/services/product.service';
import { jest } from '@jest/globals';

jest.mock('../../src/services/product.service');

describe('Product Controller', () => {
    let req;
    let res;
    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        jest.clearAllMocks();
    });
    describe('createProduct', () => {
        it('should return 201 status code when product is created', async () => {
            req.body = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
                category: 'Food',
            };

            ProductService.createProduct.mockResolvedValue(req.body);

            await ProductController.createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });

        it('should return 400 status code when missing required fields', async () => {
            req.body = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
            };

            await ProductController.createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Missing required fields' });
        });

        it('should return 500 status code when an error occurs', async () => {
            req.body = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
                category: 'Food',
            };

            ProductService.createProduct.mockRejectedValue(new Error('Error'));

            await ProductController.createProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
    });

    describe('getProducts', () => {
        it('should return 200 status code when products are found', async () => {
            ProductService.getProducts.mockResolvedValue([]);

            await ProductController.getProducts(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([]);
        });

        it('should return 500 status code when an error occurs', async () => {
            ProductService.getProducts.mockRejectedValue(new Error('Error'));

            await ProductController.getProducts(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
    });

    describe('getProductById', () => {
        it('should return 200 status code when product is found', async () => {
            req.params = { id: 1 };
            let mock = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
                category: 'Food',
            };


            ProductService.findByIdProduct.mockResolvedValue(mock);

            await ProductController.getProductById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mock);
        });

        it('should return 404 status code when product is not found', async () => {
            ProductService.findByIdProduct.mockResolvedValue(null);

            req.params = { id: 1 };

            await ProductController.getProductById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product not found' });
        });

        it('should return 500 status code when an error occurs', async () => {
            ProductService.findByIdProduct.mockRejectedValue(new Error('Error'));

            req.params = { id: 1 };

            await ProductController.getProductById(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
    });

    describe('updateProduct', () => {
        it('should return 200 status code when product is updated', async () => {
            req.params = { id: 1 };
            req.body = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
                category: 'Food',
            };

            ProductService.updateProduct.mockResolvedValue(req.body);

            await ProductController.updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(req.body);
        });

        it('should return 400 status code when missing required fields', async () => {
            req.params = { id: 1 };

            await ProductController.updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Missing required fields' });
        });

        it('should return 404 status code when product is not found', async () => {
            req.body = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
                category: 'Food',
            };
            req.params = { id: 1 };

            ProductService.updateProduct.mockResolvedValue(null);

            await ProductController.updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Product not found' });
        });

        it('should return 500 status code when an error occurs', async () => {
            req.body = {
                name: 'Product Test',
                description: 'Product Test Description',
                price: 10.0,
                category: 'Food',
            };
            req.params = { id: 1 };

            ProductService.updateProduct.mockRejectedValue(new Error('Error'));

            await ProductController.updateProduct(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
    });

});