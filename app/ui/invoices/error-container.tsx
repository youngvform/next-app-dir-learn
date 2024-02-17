interface Props {
  id: string;
  error?: null | string | string[];
}

function ErrorContainer({ id, error }: Props) {
  return (
    <div id={id} aria-live="polite" aria-atomic="true">
      {error &&
        (typeof error === 'string' ? (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ) : (
          error.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))
        ))}
    </div>
  );
}

export default ErrorContainer;
