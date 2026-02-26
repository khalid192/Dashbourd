import { createContext } from "react";

const list = [
  { id: 1, name: "khalid" },
  { id: 2, name: "loren" },
  { id: 3, name: "rolando" },
  { id: 4, name: "garidbale" },
  { id: 5, name: "ramos" },
//   { id: 6, name: "benzima" },
//   { id: 7, name: "foden" },
//   { id: 8, name: "messe" },
];
export const Listcontext = createContext(null);



export default function PList({children}){

    return<>

    <Listcontext value={list}>
     {children}
    </Listcontext>
    
    </>
}