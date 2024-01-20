import banner from '../../../assets/images/banner.png'
import nion from '../../../assets/icon/Union.png'
import icon1 from '../../../assets/icon/Vector.png'
import icon2 from '../../../assets/icon/Vector1.png'
import icon3 from '../../../assets/icon/Vector(2).png'
import icon4 from '../../../assets/icon/Group.png'
import facebook from '../../../assets/images/icon1.png'
import linkedIn from '../../../assets/images/icon2.png'
import instagram from '../../../assets/images/icon3.png'
import twitter from '../../../assets/images/icon4.png'
import frame from '../../../assets/images/Frame.png'
import grp from '../../../assets/images/Group.png'
const Banner = () => {
    return (
        <div className="md:px-4 p-4  mx-auto mt-24" id='home'>
            <div className=" bg-secondary relative rounded-xl rounded-tl-[150px] md:p-9 px-4 py-9 flex justify-between ">
                <div className="hidden lg:block">
                    <img src={frame} alt="" className=' absolute top-0 left-0 w-[250px]' />
                </div>
                <div className=" flex flex-col mx-auto md:flex-row-reverse justify-center items-center gap-10">
                    {/* banner image */}
                    <div className=" flex items-end relative">
                        <img src={banner} alt="" className=' my-9' />
                        <img src={grp} alt="" className=' absolute right-0 w-20 mb-6 cursor-pointer' />
                    </div>


                    {/* banner content */}
                    <div className=" md:w-3/5">

                        <h2 className='md:text-7xl text-4xl md:ml-14 ml-0  font-bold text-white leading-relaxed'>Streamlined Risk </h2>

                        <h2 className=' md:text-7xl text-4xl font-bold  ' style={{
                            background: 'linear-gradient(270deg, #007FFF 26.08%, #FF4D54 116.12%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '120px'
                        }}>
                            Management
                        </h2>

                        <h2 className='md:text-7xl flex md:ml-32  items-center gap-5 text-4xl font-bold text-white mb-6 leading-relaxed'>
                            <span>- Software</span> <img src={nion} alt="" className='' />
                        </h2>

                        <p className=' text-[#EBEBE8] md:w-7/12'>There are many variations of passages of Loren epsom available
                            but the majority have suffered alteration by injected.</p>

                        <div className=" py-6">
                            <button className='btnPrimary'>Start Free Trial</button>

                        </div>
                        <div className="md:w-2/3 text-[#EBEBE8]">
                            <p>See how over 7,700 customers <span className='text-[#FF4D54]'>Help the world work</span></p>
                            <div className=" flex flex-col md:flex-row gap-5 items-center justify-between my-7 cursor-pointer ">
                                <div className="">
                                    <img src={icon1} alt="" className='' />
                                </div>

                                <div className="">
                                    <img src={icon2} alt="" className='' />
                                </div>

                                <div className="">
                                    <img src={icon3} alt="" className='' />
                                </div>

                                <div className="">
                                    <img src={icon4} alt="" className='' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className=" flex flex-col-reverse cursor-pointer gap-5 items-center justify-center my-7 text-white">
                    <div className="hidden lg:block">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="hidden lg:block">
                        <img src={linkedIn} alt="" />
                    </div>
                    <div className="hidden lg:block">
                        <img src={instagram} alt="" />
                    </div>
                    <div className="hidden lg:block">
                        <img src={twitter} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;