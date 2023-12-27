import React from 'react'

const Contact = () => {
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Let's Talk</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact
