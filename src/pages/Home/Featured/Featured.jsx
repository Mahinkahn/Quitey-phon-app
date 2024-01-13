import { useState } from "react";


const Featured = () => {

    const [isYearly, setISYearly] = useState(false);
    const packages = [
        {
            name: 'Start',
            monthyPrice: 19,
            yearlyPrice: 199,
            description: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

            packa: [
                { title: "Videos of Lessons", status: true },
                { title: "Homework check", status: true },
                { title: " Additional practical task", status: false },
                { title: " Monthly conferences ", status: false },
                { title: " Personal advice from teachers", status: false },
            ]
        },

        {
            name: 'Advance',
            monthyPrice: 39,
            yearlyPrice: 399,
            description: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

            packa: [
                { title: "Videos of Lessons", status: true },
                { title: "Homework check", status: true },
                { title: "Additional practical task", status: true },
                { title: "Monthly conferences ", status: true },
                { title: "Personal advice from teachers", status: false },
            ]

        },
        {
            name: 'Premium',
            monthyPrice: 59,
            yearlyPrice: 599,
            description: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

            packa: [
                { title: "Videos of Lessons", status: true },
                { title: "Homework check", status: true },
                { title: " Additional practical task", status: true },
                { title: " Monthly conferences ", status: true },
                { title: " Personal advice from teachers", status: true },
            ]
        },
    ]

    return (
        <div className="md:px-4 p-4 max-w-screen-2xl mx-auto py-10" id="pricing">
            <div className=" text-center">
                <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Here are all our plans</h2>
                <p className=" text-tartiary md:w-1/3 mx-auto px-4">A simple paragraph is comprised of three major components. The  which is often a declarative sentence.</p>

                {/* toggle pricing */}
                <div className="mt-16">
                    <label htmlFor="toggle" className=" inline-flex items-center cursor-pointer">
                        <span className="mr-8 text-2xl font-semibold">Monthly</span>
                        <div className="w-14 h-6 bg-gray-300 rounded-full  transition duration-200 ease-in-out">
                            <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                        </div>
                        <span className="ml-8 text-2xl font-semibold">Yearly</span>
                    </label>
                    <input type="checkbox" name="" id="toggle" className=" hidden" checked={isYearly} onClick={() => setISYearly(!isYearly)} />
                </div>
            </div>

            {/* pricing cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => <div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
                        <h3 className="text-3xl font-bold text-center text-primary">{pkg.name}</h3>
                        <p className=" text-tartiary text-center my-5">{pkg.description}</p>
                        <p className=" mt-5 text-center text-secondary text-4xl font-bold">
                            {isYearly ? `${pkg.yearlyPrice}$` : `${pkg.monthyPrice}$`}<span className=" text-base text-tartiary font-medium">/{isYearly ? 'year' : 'month'}</span>
                        </p>

                        <ul
                            className="mt-4 space-y-2 px-4">
                            {pkg.packa.map((itme, index) => <li key={index} className=" flex gap-3 items-center"><img src={itme.status ? '/src/assets/images/Rectangle 18.png' : '/src/assets/images/Rectangle 20.png'} alt="" className="w-4 h-4" /> {itme.title}
                            </li>)}


                        </ul>

                        <div className=" w-full mx-auto mt-8 flex items-center justify-center">
                            <button className="btn btn-outline btn-primary">Get started</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Featured;