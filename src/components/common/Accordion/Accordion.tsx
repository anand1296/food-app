import { memo, useState } from "react";
import MenuList from "../../MenuList/MenuList";

//HOC
// const Accordion = (BodyComponent: any) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return memo(({ title, body }: { title: string; body: any }) => {
//     return (
//       <div className="acdn-container">
//         <div className="acdn-title flex justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
//           <div className="text-xl font-semibold">
//             {title} ({body.length})
//           </div>
//           <div className="cursor-pointer">
//             🔽
//           </div>
//         </div>
//         <div className={`acdn-body h-auto ${isOpen ? 'block' : 'none'}`} style={{display: isOpen ? 'block' : 'none'}}><BodyComponent menuItems={body} /></div>
//       </div>
//     );
//   });
// };

const Accordion = ({ title, body, isOpen, setIsOpen }: { title: string; body: any, isOpen: boolean, setIsOpen: () => void }) => {
//   const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="acdn-container border-b-2 shadow-lg py-3 my-4">
      <div className="acdn-title flex justify-between cursor-pointer px-4" onClick={() => setIsOpen()}>
        <div className="text-xl font-semibold">
          {title} ({body?.length})
        </div>
        <div className="cursor-pointer">{isOpen ? '🔼' : '🔽'}</div>
      </div>
      <div className="acdn-body h-auto px-4">{isOpen && <MenuList menuItems={body} />}</div>
    </div>
  );
};

export default Accordion;
