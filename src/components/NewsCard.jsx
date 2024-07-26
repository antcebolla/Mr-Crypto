function NewsCard({title, photo, tags, newsLink}) {
    return (
      <>
        <a href={newsLink} target="_blank" className="min-h-[200px] w-90% rounded-xl mb-6 flex hover:bg-slate-600 duration-200">
            <img src={photo} className="h-[100%] w-[40%] sm:w-[30%] rounded-xl mr-3" />
            <div className="h-full w-[60%] sm:w-[70%] flex flex-col">
                <h1 className="text-white text-md sm:text-2xl mt-2 mb-1">{title}</h1>
                <div className="flex flex-wrap gap-2">
                    <p className="bg-blue-950 py-1 px-4 rounded-xl text-white">{tags[0]}</p>
                    <p className="bg-blue-950 py-1 px-4 rounded-xl text-white hidden md:inline-block">{tags[1]}</p>
                    <p className="bg-blue-950 py-1 px-4 rounded-xl text-white hidden md:inline-block">{tags[2]}</p>
                    <p className="bg-blue-950 py-1 px-4 rounded-xl text-white hidden lg:inline-block">{tags[3]}</p>
                    <p className="bg-blue-950 py-1 px-4 rounded-xl text-white hidden lg:inline-block">{tags[4]}</p>
                    <p className="bg-blue-950 py-1 px-4 rounded-xl text-white hidden lg:inline-block">{tags[5]}</p>
                </div>
            </div>
        </a>
      </>
    )
  }
   
export default NewsCard