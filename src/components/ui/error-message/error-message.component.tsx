import {
  ErrorContainer,
  ErrorLink,
  ErrorTitle,
  ErrorText,
} from './error-message.styles';

interface ErrorMessageProps {
  error: Error;
  errorMessage?: string;
  errorTitle?: string;
  goTo?: string;
  linkText?: string;
}

export function ErrorMessage({
  error,
  goTo = '/',
  errorMessage,
  errorTitle = '💥Something went wrong!💥',
  linkText,
}: ErrorMessageProps) {
  return (
    <ErrorContainer>
      <ErrorTitle>{errorTitle}</ErrorTitle>
      <ErrorText>{error?.message || errorMessage}</ErrorText>

      <ErrorLink href={goTo}>{linkText}</ErrorLink>
    </ErrorContainer>
  );
}
