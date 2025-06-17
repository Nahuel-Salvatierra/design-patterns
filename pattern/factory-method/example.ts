import {
  DocumentFactory,
  PDFDocumentFactory,
  WordDocumentFactory,
  TextDocumentFactory,
} from "./DocumentFactory";

function main() {
  const pdfFactory = new PDFDocumentFactory();
  console.log("Processing PDF document:");
  pdfFactory.processDocument();

  const wordFactory = new WordDocumentFactory();
  console.log("\nProcessing Word document:");
  wordFactory.processDocument();

  const textFactory = new TextDocumentFactory();
  console.log("\nProcessing Text document:");
  textFactory.processDocument();
}

main();
