import { GlobalStyle } from "./components/styles";
import InstructorTag from "./components/InstructorTag";
import { AppWrapper } from "./components/styles";
import data from "./data";

const App = () => {
  const dataList = data.map((instructor) => {
    return (
      <InstructorTag
        name={instructor.name}
        emoji={instructor.emoji}
        github={instructor.GoToGithub}
        key={instructor.id}
        web={instructor.web}
      />
    );
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
