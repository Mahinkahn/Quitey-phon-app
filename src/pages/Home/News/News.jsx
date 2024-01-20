import lock from '../../../assets/images/loc.png'
import object from '../../../assets/images/object.png'

const News = () => {
  return (
    <div className='bg-[#01193B]'>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center  mx-auto gap-28">
          <div className="mt-10 lg:mt-0">
            <img src={lock} alt="" className='' />
          </div>
          <div className=" text-center">
            <p className=' text-primary'>Explore How Can I Help You</p>
            <h2 className='text-[42px] font-bold text-white leading-[56px]'>Discover the Value of
            </h2>
            <h2 className='text-[42px] font-bold text-white leading-[56px]'> Risk Intelligence.</h2>
            <button className="btnPrimary mt-5">Start Free Trial</button>
          </div>
        </div>
        <img src={object} alt="" className='mt-10 lg:mt-0' />
      </div>
    </div>
  );
};

export default News;