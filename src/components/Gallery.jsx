
import { useState,useEffect } from 'react'
import ProductDetails from './ProductDetails';
import LoadMore from './LoadMore';

function Gallery() {
  // Define an array of image URLs
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  useEffect(() => {
    // Fetch data from the API
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched products
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [limit]);

  const handleLoadMore = () => {
    // Increase the limit by 30 when the button is clicked
    setLimit(prevLimit => prevLimit + 12);
  };

  const product1 = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
  };

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={product.id}>
            <ProductDetails product={product} />
          {/* <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index}`} /> */}
        </div>
      ))}
    </div>
    <LoadMore onClick={handleLoadMore} />
    </>
  );
}

export default Gallery;
