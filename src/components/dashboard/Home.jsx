import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyHome from "./CompanyHome";
import StudentHome from "./StudentHome";


export default function Home({ currentUser }) {
   
  return (
    <div>
  {
     currentUser?.user?.isCompany ? <CompanyHome currentUser={currentUser} /> : <StudentHome currentUser={currentUser}/>
  }
    </div>
  );
}
