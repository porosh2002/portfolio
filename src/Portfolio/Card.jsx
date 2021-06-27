export default function Card({ data }) {
  const { Name, Live, Image, SourceCode} = data;
  var LiveURL = true;
  var PublicCode = true;
  if (Live === null) {
    LiveURL = false;
  }
  if (SourceCode === null) {
    PublicCode = false;
  }
  var DisableLiveURL = LiveURL ? null : "opacity-20 cursor-not-allowed";
  var DisableCode = PublicCode ? null : "opacity-20 cursor-not-allowed";
  return (
    <div className=" mx-4 my-4 h-52 w-72 inline-block card bg-indigo-400  hover:bg-indigo-500">
    <div className='h-10 w-10 bg-white absolute ml-[248px] mt-44 rounded-tl-[100%] opacity-10'></div>
    <div className='h-20 w-20 absolute bg-white rounded-br-[100%] opacity-10'></div>
      <div className="text-gray-700 h-full flex items-center justify-center   ">
<div>

<p className=' uppercase word-space-5 text-white text-xl mb-4'>{Name}</p>
<div className='flex justify-center mx-4'>
<a target="self" href={SourceCode} className={`${DisableCode}  mx-4`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </a>
        <a target="self" href={Image} className="">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a target="self" href={Live} className={`${DisableLiveURL} mx-4 `}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
</div>
</div>
      </div>
    </div>
  );
}
