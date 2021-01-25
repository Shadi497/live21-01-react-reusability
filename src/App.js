import { GlobalStyle } from "./components/styles";
import InstructorTag from "./components/InstructorTag";
import { AppWrapper } from "./components/styles";
import data from "./data";

const App = () => {
  const dataList = data.map((instructor) => {
    return <InstructorTag key={instructor.id} {...instructor} />;
  });
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <h2>When in doubt, ask for help!</h2>

        {dataList}
      </AppWrapper>
    </>
  );
};

export default App;
