import { useEffect, useState } from "react";
import Detail from "./components/Detail";

function Home() {
  const [item, setItem] = useState({});
  const [query, setQuery] = useState("");
  const GetData = async () => {
    const response = await fetch(`http://ip-api.com/json/${query}`, {
      method: "GET",
    });
    const data = await response.json();
    setItem(data);
  };
  //   const response = await fetch(`http://ip-api.com/json/${query}`, {
  //     method: "GET",
  //   });
  //   const data = await response.json();
  //   setItem(data);
  // };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      <h1 className="p-10 mt-10 font-thin text-center text-white md:text-2xl">
        {item.query}
      </h1>
      <div className="flex w-full">
        <div className="items-start justify-center hidden w-1/2 md:flex">
          <div className="flex flex-col py-20 text-3xl text-gray-400">
            <p>an API to find the</p>
            <p>of an IP address</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mx-auto md:w-1/2 h-96">
          <div className="flex  max-w-[450px] h-10">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="w-full p-2"
              placeholder="IP ADDRESS"
            />
            <button onClick={GetData} className="w-20 text-sm bg-blue-400">
              IP LOOKUP
            </button>
          </div>
          <div className="w-full bg-white max-w-[450px] h-auto p-1 rounded-sm flex flex-col gap-1">
            <Detail title={"IP"} value={item.query} />
            <Detail title={"City"} value={item.city} />
            <Detail title={"Region"} value={item.regionName} />
            <Detail title={"Country"} value={item.country} />
            <Detail title={"Postal Code	"} value={item.zip} />
            <Detail title={"Time Zone"} value={item.timezone} />
            <Detail title={"Provider"} value={item.org} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
