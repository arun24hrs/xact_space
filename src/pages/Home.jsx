import React from "react";
import ImageCard from "../components/ImageCard";

const Home = () => {
  const [allData, setAllData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let data = await fetch(`https://picsum.photos/v2/list?page=${page}`);
      data = await data.json();
    //   console.log(data);
      setAllData([...data])
    } catch (error) {
      console.log(error);
    } finally{
        setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  },[]);
  return <div className="home">
    {allData && allData.map((el)=>{
        return <ImageCard key={el.id} item={el}/>
    })}
    {loading && <h2>...loading</h2>}
  </div>;
};

export default Home;
