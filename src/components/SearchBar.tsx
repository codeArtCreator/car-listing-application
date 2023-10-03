import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/actions/carActions';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    return (
        <div className="mb-4">
            <div className="my-4 p-4 rounded-3xl flex items-center top-bar">
                {/* Search Section */}
                <div className="relative text-gray-600">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                        onChange={handleSearch}
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <svg
                            className="h-4 w-4 text-grey-dark"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>

                {/* Sorting Dropdown */}
                <div className="dropdown inline-block relative">
                    <button className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">Relevance</span>
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className="">
                            <a
                                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                            >
                                One
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                            >
                                Two
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="dropdown inline-block relative">
                    <button className="text-gray-700 font-semibold inline-flex items-center">
                        <span className="mr-1">All Brands</span>
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className="">
                            <a
                                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                            >
                                One
                            </a>
                        </li>
                        <li className="">
                            <a
                                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                href="#"
                            >
                                Two
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
