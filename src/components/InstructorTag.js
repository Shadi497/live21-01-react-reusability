import { TagWrapper } from "./styles";
import { Emoji } from "./styles";
import { Name } from "./styles";
import { GoToGithub } from "./styles";

const InstructorTag = (props) => {
  // Create the InstructorTag component here

  return (
    <>
      <TagWrapper key={props.id} onClick={() => window.open(props.web)}>
        <Emoji>{props.emoji}</Emoji>
        <Name>{props.name}</Name>
        <GoToGithub>{props.github}</GoToGithub>
      </TagWrapper>
    </>
  );
};

export default InstructorTag;
