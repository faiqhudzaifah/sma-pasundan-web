import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";
 
// Export route handler untuk GET dan POST
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});