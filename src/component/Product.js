import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            setData(products);
            setFilter(products);
            setLoading(false);
        };
        getProducts();
    }, []);

    const filterProducts = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilter(data);
        } else {
            const filteredProducts = data.filter((product) => product.category === category);
            setFilter(filteredProducts);
        }
    };

    const Loading = () => {
        return (
            <>
                <Skeleton height={50}/>
                <Skeleton height={100}/>
                <Skeleton height={150}/>
                <Skeleton height={200}/>
                <Skeleton height={250}/>
                <Skeleton height={300}/>
               
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button 
                        className={`btn me-2 ${activeCategory === 'All' ? 'btn-dark' : 'btn-outline-dark'}`} 
                        onClick={() => filterProducts('All')}
                    >
                        All
                    </button>
                    <button 
                        className={`btn me-2 ${activeCategory === "men's clothing" ? 'btn-dark' : 'btn-outline-dark'}`} 
                        onClick={() => filterProducts("men's clothing")}
                    >
                        Men's Clothing
                    </button>
                    <button 
                        className={`btn me-2 ${activeCategory === "women's clothing" ? 'btn-dark' : 'btn-outline-dark'}`} 
                        onClick={() => filterProducts("women's clothing")}
                    >
                        Women's Clothing
                    </button>
                    <button 
                        className={`btn me-2 ${activeCategory === 'jewelery' ? 'btn-dark' : 'btn-outline-dark'}`} 
                        onClick={() => filterProducts('jewelery')}
                    >
                        Jewellery
                    </button>
                    <button 
                        className={`btn me-2 ${activeCategory === 'electronics' ? 'btn-dark' : 'btn-outline-dark'}`} 
                        onClick={() => filterProducts('electronics')}
                    >
                        Electronics
                    </button>
                </div>

                <div className="row">
                    {filter.map((product) => (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Product;
