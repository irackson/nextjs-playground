import { registerOTel } from "@vercel/otel";
import { diag, DiagConsoleLogger, DiagLogLevel } from "@opentelemetry/api";

export function register() {
  diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

  registerOTel({
    serviceName: "nextjs-playground",
    // propagators: [
    //   "auto",
    //   {
    //     inject(context, carrier, setter) {
    //       if (carrier["x-invoke-path"] === "/api/v1/ping") {
    //         console.log("Yo from inject");
    //       }
    //       return context;
    //     },
    //     extract(context, carrier, getter) {
    //       if (carrier["x-invoke-path"] === "/api/v1/ping") {
    //         console.log("Yo from inject");
    //       }
    //       return context;
    //     },
    //   },
    // ],
  });
}
