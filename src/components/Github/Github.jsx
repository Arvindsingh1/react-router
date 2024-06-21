
import { useLoaderData } from "react-router-dom";


const Github = () => {

   const data = useLoaderData();

//   const url = "https://api.github.com/users/arvindsingh1";

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchFollowers = async () => {
//       const response = await fetch(url);
//       const result = await response.json();
//       console.log(result);
//       setData(result);
//     };

//     fetchFollowers();
//   }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-[3xl]">
        Github Followers : {data.followers}
      </div>

      <img src={data.avatar_url} alt="alternate" /> 
    </>
  );
};

export default Github;

export const fetchInfo = async () => {
  const response = await fetch("https://api.github.com/users/arvindsingh1");
  return response.json();
};
