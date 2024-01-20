import develImg from '../../../assets/icon/Development.png'
import icon0Img from '../../../assets/icon/Icon0.png'
import iconImg from '../../../assets/icon/Icon07.png'
import vector from '../../../assets/images/Vector 1(1).png'
import vector2 from '../../../assets/images/Vector 1.png'
import app from '../../../assets/icon/App.png'

const Category = () => {
    return (
        <div className=" my-24  px-4 max-w-screen-2xl mx-auto" id='feature'>
            <div className=" text-center my-20">
                <p className=' text-primary'>Explore How Can I Help You</p>
                <h3 className=' text-[42px] font-bold text-[#233D62]'>ERM Solutions to <span style={{
                    background: 'linear-gradient(270deg, #007FFF 26.08%, #FF4D54 116.12%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontStyle: 'normal',

                }}>Bridge Your</span> </h3>

                <h3 className='text-[42px] font-bold text-[#233D62]'> <span className='text-[#FF4D54]'>Risk</span> Journey Across </h3>
            </div>
            <div className="w-full ">

                {/* featured cards */}

                <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">

                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8  hover:translate-y-4 transition-all cursor-pointer">
                        <div className="">
                            <img src={app} alt="" className=' mt-8' />
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 mt-5">Enterprise</h5>
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 flex items-center gap-3"> <span ><img src={vector2} alt="" className='w-[45px]' /></span>Risk Management</h5>
                            <p className='mt-5 text-[#485666] text-base px-3'>There are many variations of passages of available but the   alteration by injected.</p>
                            <button className='mt-6 px-3 btnPink '>Explore More</button>
                        </div>
                    </div>

                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8   hover:translate-y-4  cursor-pointer md:mt-16">
                        <div className="">
                            <img src={develImg} alt="" className=' mt-8' />
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 mt-5">Third Party</h5>
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 flex items-center gap-3"> <span ><img src={vector} alt="" className='w-[45px]' /></span>Risk Management</h5>
                            <p className='mt-5 text-[#485666] text-base px-3'>There are many variations of passages of available but the   alteration by injected.</p>
                            <button className='mt-6 px-3 btnPink '>Explore More</button>
                        </div>
                    </div>

                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8  hover:translate-y-4 transition-all cursor-pointer">
                        <div className="">
                            <img src={icon0Img} alt="" className=' mt-8' />
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 mt-5">Financial</h5>
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 flex items-center gap-3"> <span ><img src={vector2} alt="" className='w-[45px]' /></span>Risk  Controls</h5>
                            <p className='mt-5 text-[#485666] text-base px-3'>There are many variations of passages of available but the   alteration by injected.</p>
                            <button className='mt-6 px-3 btnPink '>Explore More</button>
                        </div>
                    </div>

                    <div className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8   hover:translate-y-4  cursor-pointer md:mt-16">
                        <div className="">
                            <img src={iconImg} alt="" className=' mt-8' />
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 mt-5">Compliance </h5>
                            <h5 className=" text-xl font-semibold text-[#233D62] px-3 flex items-center gap-3"> <span ><img src={vector2} alt="" className='w-[45px]' /></span>Risk Management</h5>
                            <p className='mt-5 text-[#485666] text-base px-3'>There are many variations of passages of available but the   alteration by injected.</p>
                            <button className='mt-6 px-3 btnPink '>Explore More</button>
                        </div>
                    </div>

                </div>


            </div>
            <p className=' text-center my-20 text-[#233D62] text-base font-medium'>We Are Available For New Custom Project. <span style={{
                background: 'linear-gradient(270deg, #007FFF 26.08%, #FF4D54 116.12%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontStyle: 'normal',
                fontWeight: '700'

            }}>Let’s Connect Now</span></p>
        </div>
    );
};

export default Category;