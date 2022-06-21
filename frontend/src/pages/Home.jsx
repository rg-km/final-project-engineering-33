import React from "react";
import Footer from "../components/Footer/Footer";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <section className="flex justify-center bg-cyan-800 p-5">
                <div className="md:container md:mx-auto">

                    <div className="flex-initial pl-4">
                        <img src="/images/logo.png" className="w-60" />
                    </div>
                    <h2 className="text-3xl pt-9 font-bold text-left text-white">
                        The Best Way to Find Your Scholarship!
                    </h2>

                    <div className="flex-initial w-128 p-8 container mx-auto">
                        <p className="text-xl  justifiy- center pl-4 text-white">
                            Schoter is free website to help you find your scholarship for yout better future.
                            There is so many scholarship for yout future, but they can't find it.
                            Because of that, we created this website to help yout find your scholarship.
                            And also we will help you to find your scholarship and make your education better.
                            More than 10,000 scholarships are available for you to find.
                            You can change your future from this website.
                            Small changes can make big changes.
                        </p>
                    </div>

                </div>

                <div class="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white rounded-lg">
                    <div class="text-center mb-10">
                        <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
                        <p>Enter your information to register</p>
                    </div>
                    <div>
                        <div class="flex -mx-3">
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">First name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                                </div>
                            </div>
                            <div class="w-1/2 px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Last name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-12">
                                <label for="" class="text-xs font-semibold px-1">Password</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                    <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="flex justify-center bg-gray-200 p-5">
                <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <h1 className="text-3xl pb-9 font-bold text-left">
                        Top 3 Popular Scholarships
                    </h1>
                    <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                        <div>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-2xl pb-8 font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Whatever, just feed me
                            </a>
                            <div class="flex h-96 items-center justify-center bg-indigo-50 px-4">
                                <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
                                    <div class="p-5">
                                        <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                        <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-2xl pb-8 font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                Whatever, just feed me
                            </a>
                            <div class="flex h-96 items-center justify-center bg-indigo-50 px-4">
                                <div class="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                                    <img src="https://i.imgur.com/5dmBrx6.jpg" alt="plant" class="h-auto w-full" />
                                    <div class="p-5">
                                        <p class="text-medium mb-5 text-gray-700">Well, aren't you going up to the lake tonight, you've been planning it for two weeks.</p>
                                        <button class="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">See More</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="flex">
                            <div className="pt-1 mr-6 text-center">
                                <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                                    <p className="text-sm text-blue-gray-700">Feb</p>
                                </div>
                                <div className="px-2">
                                    <p className="text-lg font-bold">27</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2">
                                    <a
                                        href="/"
                                        className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                        aria-label="Category"
                                        title="Out of this world"
                                    >
                                        Out of this world
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <a
                                        href="/"
                                        aria-label="Article"
                                        className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                                    >
                                        Whatever, just feed me
                                    </a>
                                </div>
                                <p className="mb-5 text-gray-700">
                                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                    consequuntur magni voluptatem doloremque.
                                </p>
                                <div className="flex items-center">
                                    <a href="/" aria-label="Author" title="Author" className="mr-3">
                                        <img
                                            src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                            alt="avatar"
                                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                                        />
                                    </a>
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Author"
                                            title="Author"
                                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                            Susie the Cat
                                        </a>
                                        <p className="text-sm font-medium leading-4 text-gray-600">
                                            Author
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
