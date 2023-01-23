import React from "react";

function fetchData() {
  /*
Axios has url in request object. 
Fetch has no url in request object. 
Axios is a stand-alone third party package t
hat can be easily installed */
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("URL");
      setData(result.data);
    };
    fetchData();
  }, []);

  //fetchData fra database
  const initialState = {
    group: "Rooms",
    bookableIndex: 0,
    hasDetails: true,
    bookables: [],
    isLoading: true,
    error: false,
  };

  const [state, setState] = useState(initialState);
  //... is a spread syntax, allows to deconstruct array/object into separate variables

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
      error: false,
      bookables: [],
    });
    getData("URL")
      .then((bookables) =>
        setState({
          ...state,
          isLoading: false,
          bookables: bookables,
        })
      )
      .catch((error) =>
        setData({
          ...state,
          isLoading: false,
          error: true,
        })
      );
  }, []);

  return <div>fetchData</div>;
}

export default fetchData;
