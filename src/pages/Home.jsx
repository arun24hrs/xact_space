import React from "react";
import ImageCard from "../components/ImageCard";
import { faWineGlass } from "@fortawesome/free-solid-svg-icons";

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
      setAllData([...allData, ...data])
    } catch (error) {
      console.log(error);
    } finally{
        setLoading(false);
    }
  };

  const handleScroll = () => {
    // console.log(window.scrollY)
    // console.log(window.innerHeight)
    // console.log(document.documentElement.scrollHeight)
    if(window.scrollY+window.innerHeight===document.documentElement.scrollHeight){
      if(page<34){
        setPage((prev)=>prev+1)
      }
    }
  }
  console.log(page)

  React.useEffect(() => {
    getData();
  },[page]);

  React.useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    },[])

  return <div className="home">
    {allData && allData.map((el, id)=>{
        return <ImageCard key={id} item={el}/>
    })}
    {loading && <h2>...loading</h2>}
  </div>;
};

export default Home;
