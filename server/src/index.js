import express from "express";
import logger from "morgan";
import { router } from "./routes/router.js";

try {
  const app = express();

  // Set up a morgan logger using the dev format for log entries.
  app.use(logger("dev"));

  // Parse requests of the content type application/json.
  app.use(express.json());

  // Register routes.
  app.use("/", router);

  // Error handler.
  app.use(function (err, req, res, next) {
    err.status = err.status || 500;

    if (req.app.get("env") !== "development") {
      return res.status(err.status).json({
        status: err.status,
        message: err.message,
      });
    }

    // Development only!
    // Only providing detailed error in development.
    return res.status(err.status).json(err);
  });

  // Starts the HTTP server listening for connections.
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
    console.log("Press Ctrl-C to terminate...");
  });
} catch (err) {
  console.error(err);
  process.exitCode = 1;
}
