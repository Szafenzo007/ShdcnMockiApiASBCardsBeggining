import ProductCard from '@/components/ui/ProductCard';
import { Product } from "@/types";
import SearchInput from './SearchInput';
import Tcard from './TCard';
import { useState } from 'react';


interface ProductListProps {
    items : Product [];
}

const TcardList : React.FC<ProductListProps> = ({
    items }) => {

const [searchTerm, setSearchTerm] = useState('');
const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );



        return (
            
            <div className='space-y-4'>
                    <div className='mb-4'>
        <SearchInput 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        />
      </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-4 gap-4 '>
                    {filteredItems.map((item) => (
                        <Tcard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        )
    };

export default TcardList;