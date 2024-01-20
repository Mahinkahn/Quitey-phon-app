import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import vr from '../../../assets/icon/Vector 3(1).png'


const PoMenu = () => {
    const [counterState, setConterState] = useState(false)
    return (
        <div className=" "

        >

            <ScrollTrigger onEnter={() => setConterState(true)} onExit={() => setConterState(false)}
            >
                <div

                    className=' grid lg:grid-cols-3 grid-cols-1 items-center text-[#FFFFFF] space-x-10 ' >
                    <div className="">
                        <div className="">
                            {counterState && (
                                <>
                                    <h2 className="font-bold md:text-[54px]">
                                        <CountUp start={0} end={2} duration={1} />millions
                                    </h2>
                                    <h4 className=" font-medium text-base leading-[19px]">People and employees
                                    </h4>
                                    <h4 className=" font-medium text-base leading-[19px]">Worldwide</h4>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-8 ">
                        <img src={vr} alt="" className="hidden lg:block" />
                        <div className="">

                            {counterState &&
                                <>
                                    <h2 className='font-bold text-[54px]'>
                                        <CountUp start={0} end={40} duration={2} />k+
                                    </h2>
                                </>
                            }

                            <h4 className='font-medium text-base leading-[19px]'>People and employees</h4>
                            <h4 className=" font-medium text-base leading-[19px]">Worldwide</h4>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-8 ">
                        <img src={vr} alt="" className="hidden lg:block" />
                        <div className="">

                            {counterState &&
                                <div>
                                    <h2 className='font-bold text-[54px]'>
                                        <CountUp start={0} end={90} duration={2} />+
                                    </h2>
                                </div>
                            }


                            <h4 className='font-medium text-base leading-[19px]'>People and employees</h4>
                            <h4 className=" font-medium text-base leading-[19px]">Worldwide</h4>
                        </div>
                    </div>


                </div>
            </ScrollTrigger>


        </div>
    );
}
export default PoMenu;