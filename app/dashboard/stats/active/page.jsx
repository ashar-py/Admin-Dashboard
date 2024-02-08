"use client";
import ActiveUsers from "@/components/stats/activeusers";

import Link from "next/link";
import { SelectedPhoneNoProvider } from "@/components/stats/selectedPhoneNoContext";

const Active = () => {
  return (
    <SelectedPhoneNoProvider>
    <div >
     <ActiveUsers/>
    </div>
    </SelectedPhoneNoProvider>
  );
};

export default Active;

