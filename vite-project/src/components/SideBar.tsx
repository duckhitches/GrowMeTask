import {useState} from "react";
import {Collapse, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {ExpandLess, ExpandMore } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

 

const departmentsData = [
  {
    id: 1,
    name: "customer_service",
    subDepartments: [
      { id: 11, name: "support" },
      { id: 12, name: "customer_success" }
    
    ],
  },
  {
    id: 2,
    name: "design",
    subDepartments: [
      { id: 21, name: "graphic_design" },
      { id: 22, name: "product_design"},
      { id: 23, name: "web_design"}
     
    ],
  },
];

const styles= {
  sidebar : {
   width : "25%",
   maxHeight : "70%",
  },
  sublists : {
    marginLeft : '20px'
  },
  heading: {
    color: "red"
  }
}

const SideBar = () => {
  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (departmentId: number) => {
    if (open === departmentId) {
      setOpen(null);
    } else {
      setOpen(departmentId);
    }
  };

  return (
    <List component="nav" sx={styles.sidebar}>
    <Typography variant="h6" sx={styles.heading}>
        {/* Filter Departments */}
     </Typography>
   {departmentsData.map((department) => (
     <div key={department.id}>
       <ListItem onClick={() => handleToggle(department.id)}>
         {" "}
         <ListItemIcon>
           <CheckBoxOutlineBlankIcon />
         </ListItemIcon>
         <ListItemText primary={department.name} />
         {open === department.id ? <ExpandLess /> : <ExpandMore />}
       </ListItem>
       <Collapse in={open === department.id} timeout="auto" unmountOnExit>
         <List component="div"  sx ={styles.sublists}>
           {department.subDepartments.map((subDept) => (
             <ListItem key={subDept.id}>
               <ListItemIcon>
                 <CheckBoxOutlineBlankIcon />
               </ListItemIcon>
               <ListItemText primary={subDept.name} />
             </ListItem>
           ))}
         </List>
       </Collapse>
     </div>
   ))}
 </List>
  );
};

export default SideBar;

// [
// 	{
//   	"department": "customer_service",
//   	"sub_departments": [
//     	"support",
//     	"customer_success"
//   	]
// 	},
// 	{
//   	"department": "design",
//   	"sub_departments": [
//     	"graphic_design",
//     	"product_design",
//     	"web_design"
//   	]
// 	}
//   ]
