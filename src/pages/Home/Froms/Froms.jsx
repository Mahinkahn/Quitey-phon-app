import From from './From';
import ves from '../../../assets/images/Vector457.png'
import Reverse from '../Reverse/Reverse';

const Froms = () => {
    return (

        <div className=""
            style={{
                backgroundImage: `url(${ves})`,
                backgroundPositionY: '80px',

                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover', // Adjust this based on your design
                // Add other necessary styles
            }}
        >
            <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-10"

            >
                <div className="md:p-9 px-4 py-9">
                    <div className=" flex flex-col md:flex-row justify-center gap-28 items-center ">
                        {/* banner image */}
                        <div className=" md:w-3/5">
                            <p className=" text-base text-primary font-bold">Get In touch</p>
                            <h2 className="md:text-[42px] text-2xl font-bold text-[#233D62] leading-normal">We’re <span style={{
                                background: 'linear-gradient(270deg, #007FFF 21.64%, #FF4D54 68.77%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',

                            }}>Committed to</span></h2>
                            <h2 className='md:text-[45px] text-2xl font-bold text-[#233D62] leading-normal'>your Success.</h2>

                            <p className=' text-[#485666] text-base md:w-9/12  mt-7 mb-14'>Move from feeling ill-equipped and anxious about imminent catastrophe to outsmarting the bad actors and protecting your organization with confidence.</p>


                        </div>

                        {/* banner content */}
                        <div className="">
                            <From></From>
                        </div>

                    </div>

                </div>

            </div>
            <Reverse></Reverse>
        </div>



    );
};

export default Froms;