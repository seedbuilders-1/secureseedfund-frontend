import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const url =
  "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

const PDFViewerModal = ({ pdfUrl }: { pdfUrl: string }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => {
      const newPage = prevPageNumber + offset;
      return Math.min(Math.max(1, newPage), numPages || 1);
    });
  };

  const adjustScale = (delta) => {
    setScale((prevScale) => Math.max(0.5, Math.min(2, prevScale + delta)));
  };

  return (
    <div className="w-full">
      <div className="border rounded-md border-gray-200 p-4 max-w-lg">
        <Button onClick={() => setIsOpen(true)} className="">
          View PDF
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogTitle>PDF Viewer</DialogTitle>

          <div className="w-full overflow-auto">
            <div className="flex justify-center gap-2 mb-4">
              <Button
                onClick={() => adjustScale(-0.1)}
                variant="outline"
                size="sm"
              >
                Zoom Out
              </Button>
              <Button onClick={() => setScale(1.0)} variant="outline" size="sm">
                Reset Zoom
              </Button>
              <Button
                onClick={() => adjustScale(0.1)}
                variant="outline"
                size="sm"
              >
                Zoom In
              </Button>
            </div>

            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                  <span className="ml-2">Loading PDF...</span>
                </div>
              }
              error={
                <div className="text-red-500 p-4 text-center">
                  Failed to load PDF. Please check if the URL is correct.
                </div>
              }
              className="flex justify-center"
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                className="max-w-full"
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={
                  <div className="flex justify-center p-4">
                    <Loader2 className="h-6 w-6 animate-spin text-gray-500" />
                  </div>
                }
              />
            </Document>

            {numPages && (
              <div className="flex items-center justify-between mt-4 p-2">
                <Button
                  onClick={() => changePage(-1)}
                  disabled={pageNumber <= 1}
                  variant="secondary"
                >
                  Previous
                </Button>

                <span className="text-sm">
                  Page {pageNumber} of {numPages}
                </span>

                <Button
                  onClick={() => changePage(1)}
                  disabled={pageNumber >= numPages}
                  variant="secondary"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PDFViewerModal;
