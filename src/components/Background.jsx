import React from 'react'

function Background() {
  return (
    <>
       <div className="fixed z-[2] w-full h-screen">
       <div className="absolute top-[5%] w-full py-10 flex justify-center items-center text-zinc-500 font-semibold uppercase">Save your Notes here.</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[10vw] leading-none tracking-tighter text-zinc-500">DOCS.</h1>
       </div>
    </>
  )
}

export default Background