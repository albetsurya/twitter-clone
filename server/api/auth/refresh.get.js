import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const cookies = useCookies(event);
  const refreshToken = cookies.refresh.token;

  if (!refreshToken) {
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Refresh token is invalid" })
    );
  }
  return {
    hello: cookies,
  };
});
