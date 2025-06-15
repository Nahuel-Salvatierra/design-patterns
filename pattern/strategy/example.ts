import {
  PaymentProcessor,
  CreditCardPayment,
  PayPalPayment,
  CryptoPayment,
} from "./PaymentStrategy";

const processor = new PaymentProcessor(
  new CreditCardPayment("1234-5678-9012-3456", "123")
);

processor.processPayment(100);

processor.setStrategy(new PayPalPayment("user@example.com"));
processor.processPayment(200);

processor.setStrategy(new CryptoPayment("0x1234567890abcdef"));
processor.processPayment(300);
