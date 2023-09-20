// ClientPage.tsx

import { ClientData } from '@/types';
import Image from 'next/image';

import { formatDateTime } from "@/utils/formattedDate";



async function getClient(ClientId) {
    const res = await fetch(
      `https://6504321dc8869921ae24ac07.mockapi.io/products/${ClientId}?`
    );
    return await res.json();
  }


  export default async function MoviePage({ params }) {
    const ClientId = params.id;
    const client = await getClient(ClientId);
    const date = new Date(client.CPW)
   const formattedDate =formatDateTime(date);
    return (
        <div className="flex flex-col 
        md:flex-row items-center 
         bg-gray-900/20
        rounded-b-2xl ">

<div className="
    absolute 
    top-0
    left-0
    h-screen
    w-full
    
    bg-gradient-to-br
    from-[#FEF200]
    to-[#FE2100]
    rounded-md
    filter
    blur-3xl
    opacity-50
    -z-50
    ">

</div>

        
        <div
        // style={{ backgroundImage: `url(/img/hero-bg.webp)`, }}
        className=" bg-opacity-90 bg-[url('/img/50tranbg.png')] rounded-lg relative aspect-square
          md:aspect-[2.1/1] overflow-hidden
        bg-cover "
        >
    
 
    <div  className="h-full w-full flex flex-col justify-center 
                          gap-y-8 ">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row 
      items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`${client.images}`}
          width={550}
          height={450}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="xxx" // Use a meaningful alt text
        />
        <div className="p-2  ">
          <h2 className="text-lg mb-3 font-bold"> {client.name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Description:</span>
            {client.description}
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">CPW</span>
            {formattedDate}
          </p>
          {/* Add more client-specific information here */}
        </div>
      </div>
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