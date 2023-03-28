import React from 'react'

// import "../App.css";
export const Sresult = (stodo) => {

      const scroll = () =>{
       const ele = document.getElementById("scroll-"+stodo.sno);
       ele.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
      }


  return (
    <>
 <div className="cursor-pointer pt-1 px-3 relative "> 

             <div onClick={scroll} className="relative cursor-pointer my-1 w-full py-2 px-3 rounded-md bg-gray-200 shadow shadow-black/20 hover:bg-gray-300" >
              <p 
                  className="text-sm font-medium text-gray-600 "
                  key={stodo.sno}
                >
                  {stodo.title}
                </p>
                <p className="text-sm text-gray-500">
                  {stodo.desc}
                </p>
              </div>
              </div>
              </>
            )
            }
            







export default Sresult;