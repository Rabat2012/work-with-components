import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";

function App() {
  let users = [
    {
      name: "Programmer-1",
      lastName: "LN_Programmer-1",
      age: 22,
      id: 1,
    },
    {
      name: "Programmer-2",
      lastName: "LN_Programmer-2",
      age: 22,
      id: 2,
    },
    {
      name: "Programmer-3",
      lastName: "LN_Programmer-3",
      age: 22,
      id: 3,
    },
    {
      name: "Programmer-4",
      lastName: "LN_Programmer-4",
      age: 22,
      id: 4,
    },
  ];
  // const [user, setUser] = useState(users);

  return (
    <div className="App">
      <Header />
      <Section user={users} />
      <Footer />
    </div>
  );
}

export default App;
