import eading from '../../../assets/images/eading.png'

const PopularMenu = () => {
    return (
        <div className="md:px-4 p-4 max-w-screen-2xl mx-auto" id='about'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="md:w-1/2">
                    <img src={eading} alt="" />
                </div>

                {/* about content */}
                <div className="md:w-2/5">
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'> We have been improving our product <span className=' text-secondary'>for many years.</span></h2>
                    <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.There are many different kinds of animals that live in China.</p>
                    <button className='btnPrimary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;