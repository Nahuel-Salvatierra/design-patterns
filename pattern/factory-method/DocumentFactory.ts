import { Document, PDFDocument, WordDocument, TextDocument } from "./Document";

abstract class DocumentFactory {
  abstract createDocument(): Document;

  processDocument(): void {
    const document = this.createDocument();
    document.open();
    document.save();
    document.close();
  }
}

class PDFDocumentFactory extends DocumentFactory {
  createDocument(): Document {
    return new PDFDocument();
  }
}

class WordDocumentFactory extends DocumentFactory {
  createDocument(): Document {
    return new WordDocument();
  }
}

class TextDocumentFactory extends DocumentFactory {
  createDocument(): Document {
    return new TextDocument();
  }
}

export {
  DocumentFactory,
  PDFDocumentFactory,
  WordDocumentFactory,
  TextDocumentFactory,
};
