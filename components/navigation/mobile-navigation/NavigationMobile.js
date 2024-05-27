// import { useRouter } from "next/router";
// import { signOut } from "next-auth/react";
// import Link from "next/link";

// import NavMobileModal from "./NavModal";
// import CloseIcon from "../../icons/CloseIcon";

// const NavigationMobile = (props) => {
//   const { items, adminItems, currNav, setCurrNav, onClose } = props;
//   const router = useRouter();
//   const pathName = router.pathname;

//   const clickNavMobileHandler = (str) => {
//     setCurrNav(str);
//     onClose();
//   };

//   return (
//     <NavMobileModal>
//       <ul className="flex flex-col items-end px-4 py-6 gap-8 bg-light-yellow h-screen w-screen">
//         <div onClick={onClose} className="cursor-pointer">
//           <CloseIcon size="3vh" />
//         </div>
//         {pathName.substring(0, 6) !== "/admin" &&
//           items.map((item, index) => (
//             <li
//               key={index}
//               className={`cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow ${
//                 currNav === item.tag
//                   ? "text-black border-yellow"
//                   : "text-stone-500 border-transparent"
//               }`}
//               onClick={() => clickNavMobileHandler(item.tag)}
//             >
//               <Link href={item.link}>
//                 {/* Remove the <a> tag */}
//                 <div>{item.tag}</div>
//               </Link>
//             </li>
//           ))}
//         {pathName.substring(0, 6) === "/admin" && (
//           <>
//             {adminItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow ${
//                   currNav === item.tag
//                     ? "text-black border-yellow"
//                     : "text-stone-500 border-transparent"
//                 }`}
//                 onClick={() => clickNavMobileHandler(item.tag)}
//               >
//                 <Link href={item.link}>
//                   {/* Remove the <a> tag */}
//                   <div>{item.tag}</div>
//                 </Link>
//               </li>
//             ))}
//             <li className="cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow">
//               <button onClick={() => signOut()} className="focus:outline-none">
//                 Logout
//               </button>
//             </li>
//           </>
//         )}
//       </ul>
//     </NavMobileModal>
//   );
// };

// export default NavigationMobile;

import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import Link from "next/link";
import NavMobileModal from "./NavModal";
import CloseIcon from "../../icons/CloseIcon";

const NavigationMobile = (props) => {
  const { items, adminItems, currNav, setCurrNav, onClose } = props;
  const router = useRouter();
  const pathName = router.pathname;

  const clickNavMobileHandler = (str) => {
    setCurrNav(str);
    onClose();
  };

  return (
    <NavMobileModal>
      <ul className="flex flex-col items-end px-4 py-6 gap-8 bg-light-yellow h-screen w-screen">
        <div onClick={onClose} className="cursor-pointer">
          <CloseIcon size="3vh" />
        </div>
        {pathName.substring(0, 6) !== "/admin" &&
          items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow ${
                currNav === item.tag
                  ? "text-black border-yellow"
                  : "text-stone-500 border-transparent"
              }`}
              onClick={() => clickNavMobileHandler(item.tag)}
            >
              <Link href={item.link}>{item.tag}</Link>
            </li>
          ))}
        {pathName.substring(0, 6) === "/admin" && (
          <>
            {adminItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow ${
                  currNav === item.tag
                    ? "text-black border-yellow"
                    : "text-stone-500 border-transparent"
                }`}
                onClick={() => clickNavMobileHandler(item.tag)}
              >
                <Link href={item.link}>{item.tag}</Link>
              </li>
            ))}
            <li className="cursor-pointer mx-2 font-semibold transition duration-300 border-b-2 pb-2 hover:text-black hover:border-yellow">
              <button onClick={() => signOut()} className="focus:outline-none">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </NavMobileModal>
  );
};

export default NavigationMobile;
