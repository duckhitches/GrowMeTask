import {useEffect, useState } from "react";
import {DataGrid} from '@mui/x-data-grid/DataGrid';
import {Typography, Box  } from "@mui/material";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const styles = {
  container: {
    width: "75%",
    minHeight: "80%",
  },
  heading: {
    color: "red",
  }
};

//to fetch the JSON data
const PostsData: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
   
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => alert(err));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  return (
    <Box  sx ={styles.container}>
        <Typography variant="h6" sx={styles.heading}>
            Post details
        </Typography>
      <DataGrid rows={data} columns={columns} autoPageSize />
    </Box>
  );
};

export default PostsData;