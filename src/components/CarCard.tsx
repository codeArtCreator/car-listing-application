import React from 'react';

interface CarCardProps {
    car: {
        image: string;
        title: string;
        start_production?: number;
        class: string;
        fuel: string;
        transmission: string;
        capacity: number;
        mileage: string;
        rent: number;
    };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-md card-container">
            <img src={car.image} alt={car.title} className="rounded-2xl w-full h-60 object-cover mb-2" />
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{car.title}</h2>
                <span className="border-dashed border-2 rounded-xl border-indigo-600 pl-2 pr-2">{car.start_production}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#60a7ee" d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549a5.508 5.508 0 0 1 3.034 4.084a.75.75 0 1 1-1.482.235a4 4 0 0 0-7.9 0a.75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05A3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018a5.01 5.01 0 0 1 2.56 3.012a.749.749 0 0 1-.885.954a.752.752 0 0 1-.549-.514a3.507 3.507 0 0 0-2.522-2.372a.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5A.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z" /></svg>
                    <p className='ml-1'>{car.capacity} People</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#60a7ee" d="m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M346.7 182.7c-4.71 19.2-7.52 37-7.52 54c144.7 30.3 121.5 62.4 148 177.8c11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8c-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9Z" /></svg>
                    <p className='ml-1'>{car.fuel}</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#60a7ee" d="M18 15c0 2.6-1.2 4.9-3.1 6.3l-.5-.5l-2.1-2.1l1.4-1.4l1.2 1.2c.5-.7.9-1.6 1-2.5H14v-2h1.9c-.2-.9-.5-1.7-1-2.5l-1.2 1.2l-1.4-1.4l1.2-1.2c-.7-.5-1.6-.9-2.5-1V11H9V9.1c-.9.2-1.7.5-2.5 1l3 3c.2 0 .3-.1.5-.1a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2c0-.2 0-.3.1-.5l-3-3c-.5.7-.9 1.6-1 2.5H6v2H4.1c.2.9.5 1.7 1 2.5l1.2-1.2l1.4 1.4l-2.6 2.6C3.2 19.9 2 17.6 2 15c0-4.42 3.58-8 8-8s8 3.58 8 8m5-10c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.3.84 2.4 2 2.82V11h2V7.82C22.16 7.4 23 6.3 23 5m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1Z" /></svg>
                    <p className='ml-1'>{car.mileage}</p>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#60a7ee" d="M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231s231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256S145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54c144.7 30.3 121.5 62.4 148 177.8c11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8c-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9Z" /></svg>
                    <p className='ml-1'>{car.transmission}</p>
                </div>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-xl font-semibold">${car.rent}</span><span> / month</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="px-2 py-2 rounded-xl border wishlist-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><path fill="none" stroke="#4999ed" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z" /></svg>
                    </div>
                    <button className="text-white px-4 py-2 rounded-2xl mt-2 ml-3">
                        Rent now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
