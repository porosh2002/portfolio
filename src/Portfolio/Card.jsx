export default function Card({data}) {
const {Name,Delivery,Live,Image,GithubLink,Type,Pattern} = data;
    return (
        <div className='mx-4 my-4  h-60 w-72 inline-block'>
        <div className={`h-48 bg-blue-400 bg-${Pattern}`}>
        <p className='word-space-5 py-2 uppercase bg-gray-700 text-white tracking-wide'>{Name}</p>
        <div className='flex items-center mt-16 justify-center text-gray-700'>
        <p className='mx-1 opacity-60'>Delivery: </p>
        <p className='text-2xl'>{Delivery}</p>
        </div>
        </div>
        <div className='text-gray-700 flex h-12 items-center justify-end bg-gradient-to-l from-blue-400'>
        <a href='#' className='mx-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
        </a>
        <a href='#' className='mx-2'><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg></a>
        <a href='#'><svg className="w-6 h-6 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg></a>
        </div>
        </div>
    )
}
