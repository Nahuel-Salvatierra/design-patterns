export interface SupportRequest {
  type: string;
  priority: number;
  description: string;
}

export abstract class SupportHandler {
  protected nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: SupportRequest): void {
    if (this.canHandle(request)) {
      this.process(request);
    } else if (this.nextHandler) {
      this.nextHandler.handle(request);
    } else {
      console.log(`No handler available for request type: ${request.type}`);
    }
  }

  protected abstract canHandle(request: SupportRequest): boolean;
  protected abstract process(request: SupportRequest): void;
}

export class TechnicalSupportHandler extends SupportHandler {
  protected canHandle(request: SupportRequest): boolean {
    return request.type === "technical" && request.priority <= 3;
  }

  protected process(request: SupportRequest): void {
    console.log(`Technical support handling request: ${request.description}`);
  }
}

export class BillingSupportHandler extends SupportHandler {
  protected canHandle(request: SupportRequest): boolean {
    return request.type === "billing" && request.priority <= 2;
  }

  protected process(request: SupportRequest): void {
    console.log(`Billing support handling request: ${request.description}`);
  }
}

export class GeneralSupportHandler extends SupportHandler {
  protected canHandle(request: SupportRequest): boolean {
    return request.type === "general";
  }

  protected process(request: SupportRequest): void {
    console.log(`General support handling request: ${request.description}`);
  }
}
