import React from "react";
import "./App.css";
import useDebounceEffect from "./useDebouceEffect";
const App = () => {
  // without Debounce
  const [query1, setQuery1] = React.useState("");

  // with Debounce
  const [query2, setQuery2] = React.useState("");

  // with useDeblunceEffect custom hook
  const [query3, setQuery3] = React.useState("");

  const [count, setCount] = React.useState(0);

  const fetchData = () => {
    setCount((prv) => prv + 1);
    console.log("fetch data ...", count);
  };

  // without Debounce
  React.useEffect(() => {
    fetchData();
  }, [query1]);

  // with Debounce
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearInterval(timeout);
  }, [query2]);

  // with useDeblunceEffect custom hook
  useDebounceEffect(
    () => {
      fetchData();
    },
    [query3],
    500
  );

  return (
    <div className='main-wrapper'>
      <h1 className='title'>Debounce</h1>
      <h1>Q ; What is Debounce ?</h1>
      <p>
        Debounce is simply the act of delaying some piece of code, in our case the fetch request, until after all the rapid changes are
        made. This means if query changes 100 time in a second we will only run this code once after that second is over instead of running
        it 100 times .
      </p>

      <h3>
        To Read More about :
        <a href='https://blog.webdevsimplified.com/2020-10/react-debounce/' target='_blanck'>
          Debounce
        </a>
      </h3>
      <br />
      <br />
      <h4>Without Debounce</h4>
      <input type='text' id='searchbx1' value={query1} placeholder='Search...' onChange={(e) => setQuery1(e.target.value)} />
      <p className='blue'>Type in search box and flow the console.log</p>

      <p>what we see in console when we type in search box it fetch the data for every character</p>
      <p>means run the fetch() for every char ...this will cause slow down you app to lots of request at same time</p>
      <hr />
      <h3>
        To Solve the above problen we use <strong>Debounce</strong> method of javaScript
      </h3>
      <br />

      <h4>With Debounce</h4>
      <input type='text' id='searchbx2' value={query2} placeholder='Search...' onChange={(e) => setQuery2(e.target.value)} />
      <p className='blue'>Type in search box and flow the console.log</p>
      <p>
        what see with <strong>Debounce</strong> method . fetch() call after some millisecond not for each character . So when user type with
        speed then fetch() call one and two ,three times not for single character.
      </p>
      <br />
      <hr />
      <h1>With useDebouneEffect Custom Hook</h1>
      <input type='text' id='searchbx2' value={query3} placeholder='Search...' onChange={(e) => setQuery3(e.target.value)} />
      <p className='blue'>Type in search box and flow the console.log</p>
      <br />
      <h2>Debounce is something you will need in many places in your applications so it is perfect for a custom hook</h2>

      <br />
      <p>
        In the above hook we are passing in the <strong>effect and dependencies</strong> just like you would in a normal{" "}
        <strong>useEffect</strong> call. On top of that this hook takes an optional delay argument to determine how long the{" "}
        <strong>setTimeout</strong> should wait for. Then inside the code we are using
        <strong> useCallback </strong> to make sure that we only ever re-run the effect when the dependencies change.
      </p>
    </div>
  );
};

export default App;
