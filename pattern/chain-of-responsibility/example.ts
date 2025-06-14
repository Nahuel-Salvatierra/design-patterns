import {
  SupportRequest,
  TechnicalSupportHandler,
  BillingSupportHandler,
  GeneralSupportHandler,
} from "./support";

const technicalHandler = new TechnicalSupportHandler();
const billingHandler = new BillingSupportHandler();
const generalHandler = new GeneralSupportHandler();

technicalHandler.setNext(billingHandler).setNext(generalHandler);

const requests: SupportRequest[] = [
  {
    type: "technical",
    priority: 2,
    description: "Server is down",
  },
  {
    type: "billing",
    priority: 1,
    description: "Payment failed",
  },
  {
    type: "general",
    priority: 1,
    description: "How to reset password",
  },
  {
    type: "technical",
    priority: 4,
    description: "Database optimization needed",
  },
];

console.log("Processing support requests:\n");
requests.forEach((request) => {
  console.log(`Request: ${request.type} - Priority ${request.priority}`);
  technicalHandler.handle(request);
  console.log("---");
});
