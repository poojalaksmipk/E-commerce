import React, { useEffect, useState } from 'react';
import { LOGO } from '../../../assets';
import "./Home.css";

const products = [
    {
        id: 1,
        name: 'Gadpro flash Series Two-for-Three Data cable',
        brand: 'GADPRO',
        originalPrice: 999,
        discountedPrice: 499,
        imageUrl: 'https://h6q4c9n2.rocketcdn.me/wp-content/uploads/2024/10/baseus-usb-to-typec-tungston-baseuscolombo-2-300x300.jpg',
        discount: -44
    },
    {
        id: 2,
        name: 'Dr Vaku clear Bolt 10000 Mah Powerbank 20 w Fast',
        brand: 'Dr.vaku',
        originalPrice: 2700,
        discountedPrice: 1349,
        imageUrl: 'https://assets.nikshanonline.com/wp-content/uploads/2023/11/Dr-Vaku-%C2%AE-Clear-Bolt-10000-mAh-Powerbank-20W-Fast-Charging-1-1.png',
        discount: -14
    },
    {
        id: 3,
        name: 'Gadpro flash Series Two-for-Three Data cable',
        brand: 'GADPRO',
        originalPrice: 999,
        discountedPrice: 499,
        imageUrl: 'https://m.media-amazon.com/images/I/51smU9rciEL.jpg',
        discount: -47
    },
    {
        id: 4,
        name: 'JBL Tune 115BT In-Ear Wireless Headphones',
        brand: 'JBL',
        originalPrice: 2999,
        discountedPrice: 1499,
        imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/jbl-tune-115bt-in-ear-wireless-headphones-with-deep-bass-8-hour-battery-life-and-quick-charging-black-178166162-24twt.jpg',
        discount: -50
    }
];

export default function Home() {

    const [price, setPrice] = useState(0);
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(item => item.id === product.id);

            if (productIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[productIndex] = {
                    ...updatedCart[productIndex], 
                    quantity: updatedCart[productIndex].quantity + 1 
                };
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };



    useEffect(() => {
        const total = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
        setTotalPrice(total);
    }, [cart]);
    const getCartItems = () => {
        return cart.map((product) => (
            <div key={product.id} className="cart-item">
                <p>{product.name} {product.quantity > 1 && `(*${product.quantity})`}</p> 
            </div>
        ));
    };
    const [selectedOption, setSelectedOption] = useState("Sort by Relevance");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='bg-[#e8e3e1] h-full w-full flex'>
            
            <div className=' w-[23%] px-[2%] py-[1%]'>
                <div className='bg-white p-8 rounded-lg'>
                <div className='bg-white'>
                    <p className='py-[3%] w-full text-[18px]  font-poppins font-medium'>Product Categories</p>
                    <p className='py-[3%] w-full text-[18px] text-[#84807d] font-medium font-mont'>Extension</p>
                    <p className='py-[3%] w-full text-[18px] text-[#84807d] font-medium font-mont'>Mobile Phone Cases</p>
                    <p className='py-[3%] w-full text-[18px] text-[#84807d] font-medium font-mont'>Power Banks</p>
                    <p className='py-[3%] w-full text-[18px] text-[#84807d] font-medium font-mont'>Headsets</p>
                    <p className='py-[3%] w-full text-[18px] text-[#84807d] font-medium  font-mont'>Charger And Data Cable</p>
                </div>
                <hr />
                <div className='mt-[6%]'>
                    <p className='font-poppins text-[18px] font-medium'>Filter by Price</p>
                    <form action="" className=''>
                        <div>
                            <div className='mt-[4%] bg-rd flex items-center justify-between'>
                                <label className='px-[20%] py-[2%] border-2 border-gray mr-[2%] rounded-lg' htmlFor="priceRange">0</label>
                                <label className='px-[20%] py-[2%] border-2 border-gray rounded-lg' htmlFor="priceRange">50</label>
                            </div>
                            <div className='py-[3%]'>
                                <input
                                    type="range"
                                    id="priceRange"
                                    name="priceRange"
                                    min="0"
                                    max="5000"
                                    step="1"
                                    value={price} 
                                    onChange={(e) => setPrice(e.target.value)} 
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <output className='px-[16%] py-[2%] border-2 border-gray rounded-lg'>Reset</output>
                            <input className='px-[17%] py-[2%] border rounded-lg cursor-pointer bg-[#420a6b] text-white' type="submit" value="Apply" />
                        </div>
                    </form>
                </div>
                </div>
              
            </div>

            <div className='bg-[#e8e3e1] w-[72%] '>
                <div className=' h-auto'>
                    <div className=' mt-5 flex justify-between w-full h-auto'>
                        <div className=''>
                            <p className=' text-[25px] font-medium font-poppins px-4'>Mobile Accessories</p>
                        </div>

                        <div className=" mx-auto flex items-center ">
                            <div className=" text-white flex items-center justify-center ">
                                <div className="flex w-auto h-auto  ">
                                    <div className="flex items-center">
                                        <p className="text-[16px] text-black font-medium">Show : </p>
                                        <div className="flex space-x-2 ml-2">
                                            <p className="  rounded-lg  text-[#aea9a6] cursor-pointer">1 /</p>
                                            <p className=" rounded-lg  font-medium  text-black cursor-pointer">2 </p>
                                            <p className=" rounded-lg   text-[#aea9a6] cursor-pointer"> / 3 /</p>
                                            <p className="rounded-lg   text-[#aea9a6] cursor-pointer">4</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="relative w-48">
                            <select
                                id="sortDropdown"
                                className="block appearance-none w-full bg-white border border-gray-300 text-black py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="relevance">Sort by Relevance</option>
                                <option value="lowToHigh">Price : Low to High</option>
                                <option value="highToLow">Price : High to Low</option>
                                <option value="popularity">Popularity</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg
                                    className="fill-current h-4 w-4 text-gray-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </div>
                        </div>


                    </div>
                </div>


                <div className="bg-blu px-4 py-4 mt-2 w-auto h-auto ">
                    <div className="grid grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg relative">
                                <div className="bg-ero w-full h-auto flex items-center justify-center">
                                    <img
                                        src={product.imageUrl}
                                        className="p-4 w-[90%] object-contain"
                                        alt={product.name}
                                    />
                                </div>
                                <div className="flex items-center justify-center rounded-[90px] w-13 h-12 absolute bg-[#420a6b] top-7 left-8 p-2 text-[14px] text-white font-mont">
                                    {product.discount} %
                                </div>
                                <div className="w-[95%] px-6 mt-2">
                                    <p className="text-[17px] font-medium font-poppins">{product.name}</p>
                                    <p className="text-[15px] font-poppins font-light mt-2">{product.brand}</p>
                                </div>
                                <div className="flex mt-2 px-6">
                                    {[...Array(5)].map((_, index) => (
                                        <img key={index} src={LOGO.STAR} alt="star" className="h-6 w-6" />
                                    ))}
                                </div>
                                <div className="flex px-6">
                                    <p className="mt-2 text-red-500 line-through font-light">
                                        ₹ {product.originalPrice}
                                    </p>
                                    <p className="mt-2 pl-2 text-hero font-medium text-[18px]">
                                        ₹ {product.discountedPrice}
                                    </p>
                                </div>
                                <div className="mt-2 flex items-center justify-center w-full h-auto p-2">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-[#420a6b] text-white w-full h-auto rounded-md p-3"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="bg-[#420a6b] shadow-lg rounded-lg p-6 max-w-xl mx-auto my-6">
                        <h2 className="text-2xl font-semibold text-white font-mont">Cart Summary</h2>

                        <div className="mt-6 bg-hite w-auto  ">
                            <div className="flex flex-col items-center space-y-4 mt-4 p-3 ">
                                <div className="flex justify-between w-full max-w-sm p-4 bg-white shadow rounded-lg">
                                    <p className="text-base font-medium">Total Items:</p>
                                    <p className="text-base font-medium">{cart.reduce((total, item) => total + item.quantity, 0)}</p>
                                </div>

                                <div className="flex justify-between w-full max-w-sm p-4 bg-white shadow rounded-lg">
                                    <p className="text-base font-medium">Total Price:</p>
                                    <p className="text-base font-medium">₹ {totalPrice}</p>
                                </div>
                            </div>


                            <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                                <h3 className="text-lg font-medium text-purple-700">Products in your Cart:</h3>
                                <div className="space-y-4 mt-4">
                                    {cart.map((product, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                                        >
                                            <div className="flex items-start">
                                                <p className="text-base font-medium text-hero">{product.name}</p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-sm text-gray-500">Quantity</span>
                                                <span className="text-purple-hero text-lg font-semibold">
                                                    {product.quantity}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="mt-6 bg-white">
                            {cart.length > 0 ? (
                                <button
                                    onClick={() => alert("Proceeding to checkout...")}
                                    className="w-full bg-white hover:bg-white text-hero font-medium py-3 rounded-lg shadow-md transition duration-300"
                                >
                                    Proceed to Checkout
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="w-full bg-white text-black font-medium py-3 rounded-lg shadow-md cursor-not-allowed"
                                >
                                    Proceed to Checkout
                                </button>
                            )}
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}
