import {
  ErrorScreenStyled,
  ErrorScreenHeading,
  ErrorScreenDescription,
} from './ErrorScreen.styled';

const ErrorScreen = ({ error }) => {
  return (
    <ErrorScreenStyled>
      <ErrorScreenHeading>
        The error has occured. Please try reloading the page...
      </ErrorScreenHeading>
      <ErrorScreenDescription>Error info: {error}</ErrorScreenDescription>
    </ErrorScreenStyled>
  );
};

export default ErrorScreen;
