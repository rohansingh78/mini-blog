import React from 'react';

export default function Footer() {
    return (
        <div className="w-full bg-slate-700 text-white py-8 mt-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="m-4 flex-1 min-w-[200px]">
                        <h3 className="font-bold mb-2">Important Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Support</a></li>
                        </ul>
                    </div>
                    
                    <div className="m-4 flex-1 min-w-[200px]">
                        <h3 className="font-bold mb-2">Categories</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Technology</a></li>
                            <li><a href="#" className="hover:underline">Health</a></li>
                            <li><a href="#" className="hover:underline">Lifestyle</a></li>
                            <li><a href="#" className="hover:underline">Travel</a></li>
                        </ul>
                    </div>

                    <div className="m-4 flex-1 min-w-[200px]">
                        <h3 className="font-bold mb-2">Popular Posts</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">How to Start a Blog</a></li>
                            <li><a href="#" className="hover:underline">Top 10 Travel Destinations</a></li>
                            <li><a href="#" className="hover:underline">Benefits of Meditation</a></li>
                            <li><a href="#" className="hover:underline">Latest Tech Trends</a></li>
                        </ul>
                    </div>
                    <div className="m-4 flex-1 min-w-[200px]">
                        <h3 className="font-bold mb-2">Subscribe to our Newsletter</h3>
                        <p className="mb-4 text-sm text-slate-300">
                            Get the latest updates and offers.
                        </p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md text-slate-700"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-slate-600 my-4"></div>
                <div className="flex flex-wrap justify-center space-x-4 text-sm">
                    <a href="#" className="hover:underline">Contact Us</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms and Conditions</a>
                </div>

                <div className="mt-4 text-center text-xs text-slate-400">
                    &copy; {new Date().getFullYear()} Blog. All rights reserved.
                </div>
            </div>
        </div>
    );
}
