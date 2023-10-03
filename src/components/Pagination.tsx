import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { setCurrentPage } from '../store/actions/carActions';

const Pagination: React.FC = () => {
    const dispatch = useDispatch();
    const totalPages = 10;

    const currentPage = useSelector((state: RootState) => state.car.currentPage);

    const navigateToPage = (page: number) => {
        dispatch(setCurrentPage(page));
        localStorage.setItem('currentPage', page.toString());
    };

    useEffect(() => {
        const storedPage = localStorage.getItem('currentPage');
        if (storedPage) {
            dispatch(setCurrentPage(parseInt(storedPage, 10)));
        }
    }, [dispatch]);

    return (
        <div className="rounded-xl flex items-center justify-between my-2 p-2 bottom-bar">
            <div className='flex items-center'>
                {currentPage} from {totalPages}
            </div>
            <div className='flex items-center'>
                {currentPage > 1 && (
                    <Link
                        to={`/page/${currentPage - 1}`}
                        onClick={() => navigateToPage(currentPage - 1)}
                        className="bg-white px-3 py-1 rounded-full border hover:bg-blue-700 hover:text-gray-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z" /></svg>
                    </Link>
                )}
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Link
                        key={index}
                        to={`/page/${index + 1}`}
                        onClick={() => navigateToPage(index + 1)}
                        className={`px-3 py-1 rounded-full border hover:bg-blue-700 hover:text-gray-200 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'
                            }`}
                    >
                        {index + 1}
                    </Link>
                ))}
                {currentPage < totalPages && (
                    <Link
                        to={`/page/${currentPage + 1}`}
                        onClick={() => navigateToPage(currentPage + 1)}
                        className="bg-white px-3 py-1 rounded-full border hover:bg-blue-700 hover:text-gray-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z" /></svg>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Pagination;
