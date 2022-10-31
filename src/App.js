import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Result from "./result";

function App() {
  let trending =
      "https://api.themoviedb.org/3/discover/movie?api_key=d366d0d2603a207700e6348ac003caa6",
    topRated =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=452908fad1f909d66d93a3fda8788917&language=en-Us",
    Comedy =
      "https://api.themoviedb.org/3/discover/movie?api_key=452908fad1f909d66d93a3fda8788917&with_genres=35",
    Horrar =
      "https://api.themoviedb.org/3/discover/movie?api_key=452908fad1f909d66d93a3fda8788917&with_genres=27",

    Romance = "https://api.themoviedb.org/3/discover/movie?api_key=452908fad1f909d66d93a3fda8788917&with_genres=10749",

    Animation = "https://api.themoviedb.org/3/discover/movie?api_key=452908fad1f909d66d93a3fda8788917&with_genres=16"

  let [api, setapi] = useState(trending);

  let [data, setdata] = useState([]);

  useEffect(() => {
    let fun = async () => {
      let res = await axios.get(api);
      console.log(res);
      setdata(res.data.results);
    };
    fun();
  }, [api]);


  console.log(data);
  

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a onClick={() => setapi(topRated)}>Toprated</a>
          </li>
          <li>
            <a onClick={() => setapi(Comedy)}>Comedy</a>
          </li>
          <li>
            <a onClick={() => setapi(Horrar)}>Horrar</a>
          </li>
          <li>
            <a onClick={() => setapi(Romance)}>Romance</a>
          </li>
          <li>
            <a onClick={() => setapi(Animation)}>Animation</a>
          </li>
        </ul>
      </nav>

      <div className="results">
        {data.map((ele, index) => (
          <div key={index}>
            <Result ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
