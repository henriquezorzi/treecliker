"use client";
import { useState } from "react";

function Arvore({tamanho}: {tamanho: number}) {
  return(
    <div className="flex flex-col items-center">
      <div className="bg-green-600" style={{
        width: `${tamanho * 10 + 10}px`,
        height: `${tamanho *10 + 10}px`
      }}></div>
      <div className="bg-[#8f6036]" style={{
        width: `${tamanho * 1 + 5}px`,
        height: `${tamanho * 10 + 10}px`
      }}></div>
    </div>
  )
}

export default function Home() {
  const [tamanho, setTamanho] = useState(1);
  
  return (
      <div className="flex justify-center  items-center h-screen">
        <div onClick={() =>
          setTamanho(tamanho+1)
        }>
          <h1> Árvore: {tamanho} </h1>
          <Arvore tamanho={tamanho} />
        </div>
      </div>
  );
}
