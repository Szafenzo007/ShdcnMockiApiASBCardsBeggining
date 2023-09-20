// ClientPage.tsx

import { ClientData } from '@/types';
import Image from 'next/image';



async function getClient(ClientId) {
    const res = await fetch(
      `https://6504321dc8869921ae24ac07.mockapi.io/products/${ClientId}?`
    );
    return await res.json();
  }


  export default async function MoviePage({ params }) {
    const ClientId = params.id;
    const client = await getClient(ClientId);
    return (
    
 
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={client.images}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="xxx" // Use a meaningful alt text
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold"> Name{client.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Description:</span>
            {client.description}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">CPW</span>
            {client.CPW}
          </p>
          {/* Add more client-specific information here */}
        </div>
      </div>
    </div>
  );
};

// export default ClientPage;


// interface MoviePageProps {
//     data: Product ;
// }
//   const MoviePage : React.FC<MoviePageProps> = (data ) => {
//         return (
//             <div className='space-y-4'>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
//                 lg:grid-cols-4 gap-4 '>
//                     {items.map((item) => (
//                         <ProductCard key={item.id} data={item} />
//                     ))}
//                 </div>
//             </div>
//         )
//     };

// export default MoviePage;