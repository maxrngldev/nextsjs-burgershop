import {
  ErrorContainer,
  ErrorLink,
  ErrorTitle,
  ErrorText,
} from './error-message.styles';

interface ErrorMessageProps {
  error: Error;
  errorTitle?: string;
  goTo?: string;
  linkText?: string;
}

export function ErrorMessage({
  error,
  goTo = '/',
  errorTitle = '💥Something went wrong!💥',
  linkText,
}: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <ErrorTitle>{errorTitle}</ErrorTitle>
      <ErrorText>{error.message}</ErrorText>

      <ErrorLink href={goTo}>{linkText}</ErrorLink>
    </ErrorContainer>
  );
}
