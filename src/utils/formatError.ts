export const formatError = (error: string | string[]) => {
  if (typeof error === "string") {
    return error;
  }

  return error.join(", ");
};
