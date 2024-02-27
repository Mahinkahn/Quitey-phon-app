import { FaArrowDown, FaCheck } from "react-icons/fa6";
import Frame from '../../../assets/images/Frame1.png'
import icon from '../../../assets/images/image 1.png'
import mastercard from '../../../assets/images/mas.png'
import phon from '../../../assets/images/phon.png'
import amex from '../../../assets/images/amex.png'
import Paypal from '../../../assets/images/pay.png'
import vector from '../../../assets/images/visa.png'


import moment from "moment";
import { useEffect, useState } from "react";
const Banner = () => {

    const [currentTime, setCurrentTime] = useState(moment().format('MMM D, hh:mm:ss a'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format('MMM D, hh:mm:ss a'));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to ensure the effect runs only once


    return (

        <div className="md:mt-24 mt-16 min-h-screen" id="home" style={{ backgroundImage: `url(${Frame})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="container mx-auto md:pt-16 pt-4 flex md:flex-row flex-col  md:items-center  md:gap-44 gap-0">
                <div className=" md:px-0 px-4">
                    <h1 className=' lg:text-[110px] text-[37px] leading-none  text-[#00473C] font-bold flex items-center md:gap-3 gap-0'>Make money <span><img src={icon} alt="" /></span>
                    </h1>
                    <h1 className='lg:text-[110px] leading-none text-[37px] text-[#00473C] font-bold'>way to</h1>
                </div>
                <div className=" md:pt-0 pt-6 md:px-0 px-4">
                    <div className=" flex items-center md:gap-6 gap-3">
                        <div className="bg-[#00473C] p-3 rounded-md hover:transition-all hover:duration-300 cursor-pointer hover:bg-lime-800">
                            <FaArrowDown className="  text-white " />
                        </div>
                        <div className="flex items-center md:gap-5 gap-3">
                            <div className="">
                                <h5 className=" text-[#00473C] md:font-semibold font-normal"> Leslie Alexander</h5>
                                <h6 className="text-[#897E7A] md:text-sm text-xs">{currentTime}</h6>
                            </div>
                            <div className="">
                                <p className="text-[#00473C] md:font-semibold font-normal">$450.<span className=" text-sm">00 USD</span></p>
                                <span className=" flex justify-end">
                                    <img src={mastercard} alt="" className="w-8 h-8" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:pt-0 pt-6 md:px-0 px-5 flex flex-1 flex-col lg:flex-row justify-stretch gap-9   container mx-auto mt-10">
                <div className=" md:pr-16 pr-0 py-16 ">
                    <div className=" rounded-md  bg-[#FAF9F6]  p-8">
                        <div className="flex items-center justify-between py-2">
                            <h5 className=" text-[#897E7A] md:font-semibold font-normal"> Amount</h5>
                            <p className="text-[#897E7A] md:font-semibold font-normal">$100.<span className=" text-sm">00 USD</span></p>

                        </div>
                        <div className="flex items-center   gap-5 ">
                            <h6 className="text-[#897E7A] md:font-semibold font-normal">Destination</h6>
                            <span className=" flex items-center gap-1 justify-between">
                                <img src={mastercard} alt="" className="w-7 h-7" />
                                <p className="text-[#897E7A] md:font-semibold font-normal">.... 5976</p>
                            </span>

                        </div>
                        <div className="py-4">
                            <button className="btnPink w-full">Confirm refund</button>
                        </div>

                    </div>
                    <div className="py-16">
                        <p className=" text-[#233D62] font-semibold py-2">Recent Transactions</p>
                        <div className="flex items-center gap-5">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="avatar placeholder">
                                    <div className="w-12 bg-neutral text-neutral-content">
                                        <FaCheck className="  text-lime-500" />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center gap-2">
                                <div className="rating ">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />

                                </div>
                                <h1 className=" text-base font-semibold ">4.5</h1>
                            </div>

                        </div>
                        <div className="">
                            <img src={amex} alt="" className="w-24" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={phon} alt="" />
                </div>
                <div className="">
                    <h1 className='md:text-6xl text-4xl text-[#00473C] font-bold'>in a number</h1>
                    <h1 className='md:text-6xl text-4xl  text-[#00473C] font-bold'>of ways</h1>
                    <div className=" py-8">
                        <p className="text-[#897E7A]">Ope produot all the payment - unlike other</p>
                        <p className="text-[#897E7A]">providers Rainforest can be used to send money</p>
                    </div>
                    <button className="btnPrimary">Started Free Trail</button>
                    <div className="flex justify-center items-center gap-10 py-10">
                        <div className="">
                            <img src={Paypal} alt="" className="w-28" />
                        </div>
                        <div className="">
                            <img src={vector} alt="" className="w-28" />
                        </div>
                        <div className="">
                            <img src={mastercard} alt="" className="w-28" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;