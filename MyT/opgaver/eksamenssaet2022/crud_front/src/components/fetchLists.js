import { useEffect, useState } from "react";
import api from "./api.js";

// const FetchAllLists = () => {
//   const LOCAL_STORAGE_KEY = "lists";
//   const [lists, setLists] = useState([]);

//   //fetchLists
//   const fetchLists = async () => {
//     const response = await api.get("/lists");
//     return response.data;
//   };

//   useEffect(() => {
//     const getAllLists = async () => {
//       const allLists = await fetchLists();
//       if (allLists) setLists(allLists);
//     };

//     getAllLists();
//   }, []);
// };
// export default FetchAllLists;

const AllLists = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getLists();
  }, []);

  const getLists = async () => {
    const response = await getAllLists();
    console.log(response);
    setUser(response.data);
  };

  const deleteData = async (id) => {
    await deleteLists(id);
    getLists();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Items</TableCell>

          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((data) => (
          <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.title}</TableCell>
            <TableCell>{data.items}</TableCell>
            {data.items &&
              data.items.map((item) => (
                <TableCell key={item.id}>
                  {item.itemId} {item.itemName} {item.count} {item.packed}
                </TableCell>
              ))}
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0px 20px" }}
                component={Link}
                to={`/edit/${data.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "0px 20px" }}
                onClick={() => deleteData(data.id)}
              >
                Cancel
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
