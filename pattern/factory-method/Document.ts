interface Document {
  open(): void;
  save(): void;
  close(): void;
}

class PDFDocument implements Document {
  open(): void {
    console.log("Opening PDF document");
  }

  save(): void {
    console.log("Saving PDF document");
  }

  close(): void {
    console.log("Closing PDF document");
  }
}

class WordDocument implements Document {
  open(): void {
    console.log("Opening Word document");
  }

  save(): void {
    console.log("Saving Word document");
  }

  close(): void {
    console.log("Closing Word document");
  }
}

class TextDocument implements Document {
  open(): void {
    console.log("Opening Text document");
  }

  save(): void {
    console.log("Saving Text document");
  }

  close(): void {
    console.log("Closing Text document");
  }
}

export { Document, PDFDocument, WordDocument, TextDocument };
