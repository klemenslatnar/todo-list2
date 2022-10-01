import "./App.css";
import InputContainer from "./components/InputContainer";
import TaskContainer from "./components/TaskContainer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <InputContainer />
      <TaskContainer />
    </Wrapper>
  );
}

export default App;
