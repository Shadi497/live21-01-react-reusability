import { AppWrapper } from "../styles";
import { TagWrapper } from "../styles";
import { Emoji } from "../styles";
import { Name } from "../styles";
import { GoToGithub } from "../styles";
import data from "../data";

const InstructorTag = () => {
  // Create the InstructorTag component here

  const dataList = data.map((instructor) => {
    return (
      <TagWrapper
        key={instructor.id}
        onClick={() => window.open(instructor.web)}
      >
        <Emoji>{instructor.emoji}</Emoji>
        <Name>{instructor.name}</Name>
        <GoToGithub>{instructor.GoToGithub}</GoToGithub>
      </TagWrapper>
    );
  });

  return (
    <>
      <AppWrapper>
        <h2>When in doubt, ask for help!</h2>

        {dataList}
      </AppWrapper>
    </>
  );
};

export default InstructorTag;
