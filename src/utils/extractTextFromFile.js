import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

// ✅ Needed for pdfjs to work properly
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function extractTextFromFile(file) {
  const extension = file.name.split(".").pop().toLowerCase();

  if (extension === "txt") {
    return await readTxt(file);
  } else if (extension === "docx") {
    return await readDocx(file);
  } else if (extension === "pdf") {
    return await readPdf(file);
  } else {
    throw new Error("Unsupported file type");
  }
}

// 📘 Plain Text
async function readTxt(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

// 📗 DOCX
async function readDocx(file) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value; // plain text string
}

// 📕 PDF
async function readPdf(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  let fullText = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    fullText += pageText + "\n";
  }

  return fullText;
}
