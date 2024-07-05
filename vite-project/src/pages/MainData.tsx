import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

import PostsData from "../components/PostsData";
import SideBar from "../components/SideBar";

const styles = {
  MainBody: {
    display: "flex",
    minHeight: "80vh",
  },
  container: {
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  heading: {
    color: "red",
  },
  message: {
    color: "red",
  },
};

const MainData = () => {
  const userDataString = localStorage.getItem("userData");
  const navigate = useNavigate()

  //Credentials are wrong then it returns to the same page
  useEffect(() => {
    if (!userDataString) {
        alert("Please Enter your credentials to access the data")
        return navigate("/")
     }  
  },[])
  

  return (
    <Box sx={styles.MainBody}>
      <SideBar />
      <PostsData />
    </Box>
  );
};

export default MainData;