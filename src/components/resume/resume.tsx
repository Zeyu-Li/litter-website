import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Self-hosted legacy worker, matching the legacy pdf.js alias in next.config.mjs:
// the modern pdf.js build only supports the latest browsers (not e.g. Safari 18).
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ResumeDoc = () => {
  // sets title
  useEffect(() => {
    document.title = "Andrew's Portfolio | Resume";
  }, []);

  const [PDFWidth, setPDFWidth] = useState(
    window.innerWidth > 1050 ? 880 : window.innerWidth * 0.7
  );

  useEffect(() => {
    const resizeListener = () => {
      setPDFWidth(window.innerWidth > 1050 ? 880 : window.innerWidth * 0.7);
    };

    // set resize listener
    window.addEventListener("resize", resizeListener);
  }, []);

  const removeTextLayerOffset = (): void => {
    const textLayers = document.querySelectorAll<HTMLElement>(
      ".react-pdf__Page__textContent"
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  };

  return (
    <Document
      file={"/resume.pdf"}
      loading={<p>Loading...</p>}
      externalLinkTarget="_blank"
    >
      {/* width keeps react-pdf's white page background flush with the PDF */}
      <div style={{ width: PDFWidth, height: PDFWidth * (11 / 8.5) }}>
        <Page
          onLoadSuccess={removeTextLayerOffset}
          pageNumber={1}
          width={PDFWidth}
        />
      </div>
    </Document>
  );
};

export default ResumeDoc;
