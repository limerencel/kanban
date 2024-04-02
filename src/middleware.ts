export { default } from "next-auth/middleware";

export const config = { matcher: ["/"] };

//The matcher property in the config object is an array containing the routes you want the middleware to protect.
//In this case, '/' designates the home page, indicating that the middleware protects the home page.
