import React, { useRef, useState } from 'react'
import Card from './card'

function Foreground() {
  const ref = useRef(null);
  const data = [
    {desc:"Lorem ipsum consectetur adipisicing.", 
    filesize:"9MB", 
    close: false, 
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
  },
  {desc:"Lorem ipsum consectetur adipisicing.", 
    filesize:"0.9MB", 
    close: false, 
    tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}
  },
  {desc:"Lorem ipsum consectetur adipisicing.", 
    filesize:"19MP", 
    close: true, 
    tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
  },
  {desc:"Lorem ipsum consectetur adipisicing.", 
    filesize:"19MP", 
    close: true, 
    tag: {isOpen: false, tagTitle: "Download Now", tagColor: "green"}
  },
  ];
  useState()
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index)=>(
          <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground