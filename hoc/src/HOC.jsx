import { useState, useEffect } from "react";

// Remember we passed a component(ClientData) and a url from App.js
const HOC = (WrappedComponent, url) => {
  let [apiData, setapiData] = useState("");

  //   just use useEffect to make an async call, afer we get data from API,assign the data from API to state variable "apiData" and re-render this component
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(jsonData);
      setapiData(JSON.stringify(jsonData));
    };
    fetchData();
  }, []);

  //  This is the interesting part,Notice we are not directly returning JSX but a function(arrow function) which automatically takes the "props" from App.js(Because we call HOC from App.js), and Notice on line 12 in App.js, we use this WrappedComponent below and append properties to it like "age" or whatever you want.
  return (props) => {
    //props is 99, but why? the props is coming from line 12 in App.js
    console.log(props);
    // fetchedData and all the other properties are what we pass to ClientData.js but ClientData.js only returns the fetchedData(we could return everything though) and we want to append the other properties to the WrappedComponent that is passed to this HOC such as the age property on line 12 in App.js that is why we add {...props} so any additional properties will be appended to the WrappedComponent below.We can also use any appended {...props} in ClientData as well because in this case WrappedComponent represents the ClientData.
    return <WrappedComponent fetchedData={apiData} {...props} />;
  };
};

export default HOC;
