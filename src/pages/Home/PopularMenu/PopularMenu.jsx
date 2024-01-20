import eading from '../../../assets/images/Rectangle 2.png'
import subtract from '../../../assets/images/Subtract.png'
import subtrac from '../../../assets/images/Subtract(1).png'
import Group from '../../../assets/images/Group12.png'
import sub from '../../../assets/icon/Subtract.png'
import vet from '../../../assets/icon/Vector 1585.png'
import one from '../../../assets/icon/Frame 18.png'
import tow from '../../../assets/icon/Frame 18(2).png'
import there from '../../../assets/icon/Frame 18(1).png'
import sti from '../../../assets/images/Subtract(2).png'
import im from '../../../assets/images/Vector 1584.png'
import PoMenu from './PoMenu'

const PopularMenu = () => {
    return (
        <div className='bg-[#00193C]'>
            <div className="md:px-4  p-4 relative flex justify-between" id='about'>
                <div className=" ">
                    <img src={eading} alt="" className='' />
                </div>
                <div className="flex flex-col lg:flex-row items-center relative  my-20">

                    <div className="md:w-1/2">
                        <div className=" flex flex-col lg:flex-row items-center justify-center gap-4">
                            <img src={subtrac} alt="" className='w-[364px]' />
                            <img src={Group} alt="" className='w-[182.64px] cursor-pointer' />
                        </div>
                        <div className="flex flex-col lg:flex-row  items-center justify-center">
                            <div className=" bg-no-repeat mt-5" style={{ backgroundImage: `url(${sub})` }}>

                                <div className="pr-12">
                                    <p className=' text-white mt-14 px-5'>Risk <span className='text-[#FF3D55]'>Management</span></p>
                                    <p className='flex items-center gap-4 text-white px-5'><img src={vet} alt="" />Cost Effect</p>
                                    <h2 className='text-white text-4xl font-bold mt-24 pb-20 px-5'>6-10%</h2>
                                </div>
                            </div>
                            <img src={subtract} alt="" className='md:-mt-20 w-[300px]' />
                        </div>

                    </div>

                    {/* about content */}
                    <div className="lg:w-2/5">
                        <p className='text-primary mb-5 text-base font-medium'>Explore How Can I Help You</p>
                        <h2 className='md:text-5xl text-3xl font-bold text-white mb-5 leading-normal'> Simplify Compliance & </h2>
                        <h3 className='md:text-5xl text-3xl font-bold text-white mb-5'>Manage <span
                            style={{
                                background: 'linear-gradient(270deg, #137BF2 11.66%, #FF4D54 70.06%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontStyle: 'normal',

                            }}
                        >Risk with Quiety</span></h3>

                        <h2><span className=' text-white md:text-5xl text-3xl font-bold leading-normal'>One GRC Software</span></h2>

                        <p className='text-[#FFF] text-lg mb-7 mt-6'>All-in-one Governance, Risk, and Compliance (GRC) software. Our comprehensive solution empowers your organization to efficiently Navigate the complex landscape.</p>

                        <div className=" space-y-3 mt-10 text-white">
                            <div className=" flex items-center gap-2">
                                <img src={one} alt="" />
                                <p>Stay Compliant with Global Regulations</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={tow} alt="" />
                                <p>Oversee of all your GRC initiatives</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={there} alt="" />
                                <p>Oversee of all your GRC initiatives</p>
                            </div>
                        </div>

                        <button className='btnPrimary mt-14'>Start Free Trial</button>
                    </div>

                </div>
                <div className=" absolute right-0 top-0 w-64">
                    <img src={sti} alt="" />
                </div>

            </div>
            <div className=" flex justify-center items-center -mt-16">
                <img src={im} alt="" />
            </div>
            <div className="w-3/4 md:mx-32 mx-auto py-20 flex flex-col lg:flex-row justify-center items-center md:space-x-24 space-x-0 ">
                <div className="">
                    <p className=' text-primary'>Fun Facts</p>
                    <h1 className=' text-white md:text-4xl text-2xl font-bold leading-normal my-2 '>The Numbers tell</h1>
                    <h2 className=' text-white md:text-4xl text-2xl leading-normal font-bold'>Our Story</h2>
                    <p className='mt-5 text-white'>Far and wide, we’re known for our dedication to</p>
                    <p className='text-white'>governance, risk compliance.</p>
                </div>
                <div className="">
                    <PoMenu></PoMenu>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;