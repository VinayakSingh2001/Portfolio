import React from 'react'

const Connect = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-4">
                <div className="bg-white mx-[200px] p-8 rounded-md shadow-md">
                    <h1 className="text-3xl font-bold mb-4 text-gray-800">Let's Talk</h1>

                    {/* Form for newsletter subscription */}
                    <form action="#" method="post">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label htmlFor="name" className="text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="email" className="text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>

                        </div>
                        <label htmlFor="message" className=" text-gray-700 mt-4">Message</label>
                        <textarea
                            id="message"
                            name="message"

                            className="w-full border border-gray-300 p-2 rounded-md resize-none focus:outline-none focus:border-blue-500"
                            rows="4"
                        />


                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Connect
