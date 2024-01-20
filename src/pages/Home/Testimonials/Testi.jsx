
import rest from '../../../assets/images/sprint.png'
import Banner from "../../../assets/images/Subtract(22).png";
import rsa from '../../../assets/images/Rectangle 4427.png'


const Testi = () => {

    return (
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-10">
            <div className="md:p-9 px-4 py-9">
                <div className=" flex flex-col md:flex-row justify-center gap-28 items-center ">
                    {/* banner image */}
                    <div className=" cursor-pointer md:w-1/2">
                        <div className="relative group">
                            <img className="lg:h-[611px] " src={Banner} alt="" />
                            <div
                                className="flex justify-center items-center opacity-0 bg-gradient-to-t  to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                                <a to='#' className='flex-row  flex justify-center items-center gap-3 text-center bg-white px-4 py-2 rounded-xl absolute mt-10  top-0 left-[425px] shadow-3xl'>
                                    <div className="avatar-group -space-x-6  rtl:space-x-reverse ">
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-14">
                                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="">
                                        <img src={rest} alt="" className='w-20' />
                                    </div>
                                </a>

                                <div className=" bg-white  rounded-xl py-5 px-8 absolute bottom-5 left-10">
                                    <div className="flex items-center">
                                        <img className="w-10 h-10 rounded-full mr-4" src={rsa} alt="Devon Lane " />
                                        <div className="">
                                            <p className="text-[#233D62] text-lg leading-none">Devon Lane </p>
                                            <p className="text-[#485666] text-sm">From customer support</p>

                                        </div>

                                    </div>
                                    <div className=" ml-14 text-lg">
                                        <p className='text-[#233D62]'>Hi, Thanks your interest,Here </p>
                                        <p className='text-[#233D62]'>check out this mode.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* banner content */}
                    <div className=" md:w-3/5">
                        <p className=" text-base text-primary font-bold">Explore How Can I Help You</p>
                        <h2 className="md:text-[42px] text-2xl font-bold text-[#233D62] leading-normal">Expert <span style={{
                            background: 'linear-gradient(270deg, #007FFF 21.64%, #FF4D54 68.77%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',

                        }}>Prioritize Risk</span></h2>
                        <h2 className='md:text-[45px] text-2xl font-bold text-[#233D62] leading-normal'>Management Support </h2>

                        <p className=' text-[#485666] md:w-9/12  mt-7 mb-14'>Our software was purpose built to be interconnected  across enterprise governance areas and our clients’ core systems – serving as a single source of truth for your Organizations. Identify high-risk zones for management, and finance. LogicManager facilitates inter-departmental collaboration, offering analytical insights that paint a vivid risk landscape  you can allocate your resources strategically.</p>

                        <div className="my-6">
                            <button className='btn btn-outline btnPink '>Start Free Trial</button>

                        </div>
                    </div>

                </div>
                <div className="">

                </div>
            </div>

        </div>
    );
};

export default Testi;