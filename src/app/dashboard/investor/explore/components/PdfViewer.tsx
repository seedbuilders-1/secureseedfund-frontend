import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Loader2 } from "lucide-react";

const PDFViewerModal = ({ pdfUrl }: { pdfUrl: string }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState<number | null>(null);
  const [scale, setScale] = useState(1.5);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateScale = () => {
      const container = document.getElementById("pdf-container");
      if (container) {
        const width = container.clientWidth;
        setContainerWidth(width);

        if (width < 640) {
          setScale(1);
        } else if (width < 768) {
          setScale(1.1);
        } else if (width < 1024) {
          setScale(1.2);
        } else {
          setScale(1.5);
        }
      }
    };

    // Initial update
    updateScale();

    // Update on resize
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full">
      <div id="pdf-container" className="w-full overflow-x-hidden">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          }
          error={
            <div className="text-red-500 p-4 text-center">
              Failed to load PDF. Please check if the URL is correct.
            </div>
          }
          className="flex flex-col items-center"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div
              key={`page_${index + 1}`}
              className="w-full flex justify-center px-2 sm:px-4 md:px-6"
            >
              <Page
                pageNumber={index + 1}
                scale={scale}
                className="max-w-full shadow-lg mb-4 bg-white"
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex justify-center p-4">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
                  </div>
                }
                width={
                  containerWidth
                    ? Math.min(containerWidth - 32, 1000)
                    : undefined
                }
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFViewerModal;
