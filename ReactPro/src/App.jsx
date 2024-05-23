import Button from "./Button";
import Stud from "./Stud";

function App() {
      return(
        <>
        <Stud name="Santa" age={90} isStud={false}/>
        <Stud name="Chandru" age={91} isStud={false}/>
        <Stud name="Valen" age={72} isStud={false}/>
        <Stud name="Nickel" age={46} isStud={false}/>
        <Button />
        </>
      );
}

export default App
