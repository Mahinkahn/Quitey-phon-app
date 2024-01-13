import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="md:px-4 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
            <div className="gradientBg rounded-xl rounded-br-[100px] md:p-9 px-4 py-9">
                <div className=" flex flex-col md:flex-row-reverse justify-center items-center gap-10">
                    {/* banner image */}
                    <div className="">
                        <img src={banner} alt="" className='lg:h-[386px]' />
                    </div>

                    {/* banner content */}
                    <div className=" md:w-3/5">
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>Develop your skills without diligence</h2>
                        <p className=' text-[#EBEBE8] md:w-7/12'>A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China.</p>

                        <div className=" space-x-5 space-y-4">
                            <button className='btnPrimary'>Get Started</button>
                            <button className='btnPrimary'>Discount</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;