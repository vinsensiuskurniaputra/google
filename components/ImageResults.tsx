import React from "react";
import PaginationButtons from "./PaginationButtons";

const ImageResults = ({ results }) => {
  return (
    <div className='mt-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
        {results.items?.map((result) => (
          <div key={result.link} className="mb-8">
            <div className='group'>
              <a href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className='group-hover:shadow-xl w-full h-60 object-contain'
                />
                <div className='group-hover:underline'>
                  <h2 className='truncate'>{result.title}</h2>
                </div>
                <div className='group-hover:underline'>
                  <p className="text-gray-600">{result.displayLink}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons /> 
      </div>
    </div>
  );
};

export default ImageResults;
