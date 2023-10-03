import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import CarCard from './CarCard';

const CarList: React.FC = () => {
    const { page } = useParams<{ page?: string }>();
    const currentPage = parseInt(page || '1', 10);
    const pageSize = 6;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const cars = useSelector((state: RootState) => state.car.cars);
    const searchQuery = useSelector((state: RootState) => state.car.searchQuery);

    const filteredCars = cars
        .filter((car) =>
            car.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(startIndex, endIndex);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredCars.map((car, index) => (
                <CarCard key={index} car={car} />
            ))}
        </div>
    );
};

export default CarList;
