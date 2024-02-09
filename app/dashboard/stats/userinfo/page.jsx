 "use client";
import UserInfo from "@/components/stats/userinfo";
import { useSelectedPhoneNo } from "@/components/stats/activeusers"; 

const Info = () => {
  
  const { selectedPhoneNo } = useSelectedPhoneNo();

  return (
    <div>
      <UserInfo phoneNumber={selectedPhoneNo} />

      {/* {selectedPhoneNo && <UserInfo phoneNumber={selectedPhoneNo} />} */}
    </div>
  );
};

export default Info;

// import UserInfo from "@/components/stats/userinfo";
// import { useSelectedPhoneNo } from "@/components/stats/activeusers"; 

// const Info = () => {
//   const { selectedPhoneNo } = useSelectedPhoneNo();

//   // Render UserInfo component only when selectedPhoneNo is not null
//   return (
//     <div>
//       {selectedPhoneNo && <UserInfo phoneNumber={selectedPhoneNo} />}
//     </div>
//   );
// };

// export default Info;

