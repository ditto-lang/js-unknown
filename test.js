import { main } from "./dist/Unknown_Test.js";

function log_success(msg) {
  return () => {
    console.info("👍", msg);
  };
}

function log_error(msg) {
  return () => {
    console.error("😬", msg);
  };
}

const ok = main({ log_success, log_error })();
if (!ok) {
  process.exit(1);
}
