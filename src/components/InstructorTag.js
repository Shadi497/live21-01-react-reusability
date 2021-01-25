import { TagWrapper } from "./styles";
import { Emoji } from "./styles";
import { Name } from "./styles";
import { GoToGithub } from "./styles";

const InstructorTag = (props) => {
  // Create the InstructorTag component here
  const { name, emoji, github } = props;
  // you can add {name,emoji,github} instead of props above in ln6
  return (
    <>
      <TagWrapper
        key={props.id}
        onClick={() => window.open(`https://github.com/${github}`)}
      >
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToGithub>Go to GitHub</GoToGithub>
      </TagWrapper>
    </>
  );
};

export default InstructorTag;
