import { Link } from "react-router-dom";


const Froms = () => {
    return (

        <section className="max-w-4xl p-6 mx-auto bg-[#FFF] rounded-md shadow-md dark:bg-gray-800 mt-20">
            <h1 className="text-xl font-bold text-[#233D62] capitalize dark:text-white">Get In Touch Now</h1>
            <form>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>

                        <label className="text-[#233D62] dark:text-gray-200" htmlFor="username">First Name<span className="text-[#FF3D55]">*</span></label>
                        <input id="username" required type="text" placeholder="First Name" className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div>

                        <label className="text-[#233D62] dark:text-gray-200" htmlFor="lastName">Last Name<span className="text-[#FF3D55]">*</span></label>
                        <input id="lastName" required type="text" placeholder="Last Name" className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-[#233D62] dark:text-gray-200" htmlFor="emailAddress">Email*</label>
                        <input id="emailAddress" required type="email" placeholder="Email Adress" className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-[#233D62] dark:text-gray-200" htmlFor="companyName">Company Name<span className="text-[#FF3D55]">*</span></label>
                        <input id="companyName" required placeholder="Company Name" type="text" className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-[#233D62] dark:text-gray-200" htmlFor="phoneNumber">Phone Number*</label>
                        <input id="phoneNumber" required placeholder="Phone No" type="number" className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-[#233D62] dark:text-gray-200" htmlFor="lastName">How did You Hear About Us?</label>
                        <input id="lastName" placeholder="Last Name" type="text" className="block w-full px-4 py-3 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                </div>

                <div className="mt-4">
                    <label className="text-[#233D62] dark:text-gray-200" htmlFor="lastName">Country Reason</label>
                    <input id="lastName" placeholder="Select Your Country" type="text" className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div className="w-full mt-4">
                    <p className=" text-[#485666]">Quiety will use the information provided to contact you about products & services. You may opt out </p>
                    <p className="text-[#485666]">of receiving these communications at any time. For more information see Quiety <Link className=" text-primary">Privacy Policy</Link></p>
                </div>


                <div className="mt-6">
                    <button className="btnPrimary">Start Free Trial</button>
                </div>
            </form>
        </section>



    );
};

export default Froms;