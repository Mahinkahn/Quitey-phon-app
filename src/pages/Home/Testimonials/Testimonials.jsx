import Banner from "../../../assets/images/bgImg.png";


const Testimonials = () => {
    return (
        <div className="md:px-4 p-4 max-w-screen-2xl mx-auto my-10">
            <div className="gradientBg rounded-xl rounded-br-[100px] md:p-9 px-4 py-9">
                <div className=" flex flex-col md:flex-row-reverse justify-center items-center gap-10">
                    {/* banner image */}
                    <div className="">
                        <img src={Banner} alt="" className='lg:h-[386px]' />
                    </div>

                    {/* banner content */}
                    <div className=" md:w-3/5">
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-normal'>Each student an share their discount code for friends</h2>
                        <p className=' text-[#EBEBE8] md:w-7/12'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>

                        <div className="my-6">
                            <button className='btnPrimary'>I have a code</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;