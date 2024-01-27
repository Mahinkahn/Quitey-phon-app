import rsa from '../../../assets/images/Rectangle 4427.png'
import ster from '../../../assets/icon/image 8.png'
import Slider from 'react-slick';
import './Reverse.css'


const Reverse = () => {
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        variableHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const user = [
        {
            name: 'Leslie Alexander',
            image: rsa,
            icon: ster,
            text: '“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing roi”',
        },
        {
            name: 'Leslie Alexander',
            image: rsa,
            icon: ster,
            text: '“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing roi”',
        },
        {
            name: 'Leslie Alexander',
            image: rsa,
            icon: ster,
            text: '“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing roi”',
        },
        {
            name: 'Leslie Alexander',
            image: rsa,
            icon: ster,
            text: '“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing roi”',
        },
        {
            name: 'Leslie Alexander',
            image: rsa,
            icon: ster,
            text: '“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing roi”',
        },
        {
            name: 'Leslie Alexander',
            image: rsa,
            icon: ster,
            text: '“Interactively redefine progressive networks. Synergistically integrate dynamic solutions vis-a-vis resource maximizing roi”',
        },
    ]

    return (
        <div className="md:px-14 bg-[#F3F6FA] p-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mt-10">
                <div className=" md:w-3/5">

                    <h2 className="md:text-[42px] text-2xl font-bold text-[#233D62] leading-normal">Real Stories_<span style={{
                        background: 'linear-gradient(270deg, #007FFF 21.64%, #FF4D54 68.77%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',

                    }}>Real Impact</span></h2>


                    <p className=' text-[#485666] text-base md:w-9/12  mt-4'>Move from feeling ill-equipped and anxious about imminent catastrophe</p>
                    <p className=' text-[#485666] text-base md:w-9/12 mb-14'>to outsmarting the bad actors &  protecting.</p>


                </div>
                <div className="">
                    <button className='btnPrimary'>Read their Stories</button>
                </div>
            </div>

            <div className='md:mt-0 mt-6 my-10'>
                <Slider {...settings}>
                    {user.map((user, index) => (
                        <div
                            key={index}
                            className="custom-slide grid md:grid-cols-2 grid-cols-1 gap-x-24 py-4 px-4" // Add your custom CSS class for the gap and card width here
                        >
                            {/* Your existing content */}
                            <div className="bg-white shadow-3xl py-7 px-4">
                                <div className=" ">
                                    <div className="flex items-center">
                                        <span className="shrink-0  p-4">
                                            <img src={user.image} alt="" />
                                        </span>
                                        <div>
                                            <h2 className="text-lg font-bold">{user.name}</h2>
                                            <img src={user.icon} alt="" />
                                        </div>
                                    </div>
                                    <div className="px-7">
                                        <p className="mt-1 text-sm text-[#485666]">
                                            “Interactively redefine progressive networks.
                                        </p>
                                        <p className="mt-1 text-sm text-[#485666]">
                                            Synergistically integrate dynamic solutions
                                        </p>
                                        <p className="mt-1 text-sm text-[#485666]">
                                            vis-a-vis resource maximizing roi”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>



        </div >
    );
};

export default Reverse;