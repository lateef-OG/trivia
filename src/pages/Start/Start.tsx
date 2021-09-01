import Welcome from "../../components/welcome/Welcome";
import StartBackground from "../../components/backgrounds/StartBackground";

import Container from "../../components/container/Container";
import WelcomeForm from "../../components/welcome/WelcomeForm";

const Start = () => {
  return (
    <Container backgroundColor="purple">
      <Welcome />
      <WelcomeForm />
      <StartBackground />
    </Container>
  );
};

export default Start;
