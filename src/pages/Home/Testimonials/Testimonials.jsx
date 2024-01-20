import iog from '../../../assets/images/lo.png'
import icon12 from '../../../assets/images/icon12.png'
import rest from '../../../assets/images/resat.png'
import Banner from "../../../assets/images/Subtract(11).png";
import rsa from '../../../assets/images/Rectangle 4427.png'
import { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";



const Testimonials = () => {

    const [counterState, setConterState] = useState(false)
    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-10">
            <div className="rounded-xl rounded-br-[100px] md:p-9 px-4 py-9">
                <div className=" flex flex-col md:flex-row-reverse justify-center items-center gap-10">
                    {/* banner image */}
                    <div className="bg-[#EEF8FA] cursor-pointer rounded-tl-[150px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[200px]">

                        <div className="relative group">
                            <img className="className='lg:h-[611px] md:ml-10 ' " src={Banner} alt="" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t  to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <a to='#' className='flex-row text-center'>
                                    <img src={rest} alt="" className=' absolute mt-10  top-0 left-[480px]' />
                                </a>
                                <ScrollTrigger onEnter={() => setConterState(true)} onExit={() => setConterState(false)}>
                                    <div className=" bg-white  rounded-xl py-7 px-8 absolute bottom-5 left-16">
                                        <div className="flex items-center space-x-4 justify-center">
                                            <img src={rsa} alt="" className='' />
                                            <div className="">
                                                {counterState && (
                                                    <>
                                                        <h1 className='text-[34.331px] font-bold'>
                                                            <CountUp start={0} end={4560} duration={1} />k+
                                                        </h1>
                                                    </>
                                                )}


                                                <div className=" flex items-center gap-2">
                                                    <img src={icon12} alt="" />
                                                    <p className='text-[#2ACE93]'>10.35%</p>
                                                    <p>Last 7 Days </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                    </div>

                    {/* banner content */}
                    <div className=" md:w-3/5">
                        <p className=" text-base text-primary font-bold">Explore How Can I Help You</p>
                        <h2 className='md:text-[42px] text-2xl font-bold text-[#233D62] leading-normal'>Connect Across Business </h2>
                        <h2 className="md:text-[42px] text-2xl font-bold text-[#233D62] leading-normal">Areas to <span style={{
                            background: 'linear-gradient(270deg, #007FFF 21.64%, #FF4D54 68.77%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',

                        }}>Prioritize Risk</span></h2>
                        <p className=' text-[#485666] md:w-9/12  mt-7 mb-14'>Our software was purpose built to be interconnected  across enterprise governance areas and our clients’ core systems – serving as a single source of truth for your Organizations. Identify high-risk zones for management, and finance. LogicManager facilitates inter-departmental collaboration, offering analytical insights that paint a vivid risk landscape  you can allocate your resources strategically.</p>

                        <div className="my-6 flex justify-between">
                            <button className='btn btn-outline btnPink '>Start Free Trial</button>
                            <img src={iog} alt="" className=' hidden lg:block' />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Testimonials;