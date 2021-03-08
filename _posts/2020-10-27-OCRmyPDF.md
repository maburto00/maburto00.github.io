---
layout: post
title:  "Tools for scanning books/documents to PDF and performing OCR text recognition"
date:   2020-10-27 15:10:00 +0900
categories: general
comments: true
---

## Scanning documents to PDF (using vFlat)
vFlat  is an android app that makes it very fast to scan books to JPG and export to PDF either in Color or Grayscale. I tried other apps, but this is the easiest and it is free. Compared to OfficeLens and GoogleScan, vFlat makes the process faster, especially for books.
https://play.google.com/store/apps/details?id=com.voyagerx.scanner&hl=en&gl=US

## OCRmyPDF (Tool for making scanned PDFs searchable)
I found this tool very useful so I want to share it here. This is just a brief explanation of how to install and use OCRmyPDF, you can see detailed instructions in [OCRmyPDF Documentation](https://ocrmypdf.readthedocs.io/en/latest/index.html)

### Installation on Mac
1. Install using the following command:
``brew install ocrmypdf``

### Installation on Ubuntu
1. Install using the following command:
``sudo apt-get install ocrmypdf``

### Installation on Windows
My suggestion is to install "Ubuntu" from the Windows Store to have access to an Ubuntu terminal from Windows and install from there using the previous instructions. 

NOTE: when using Ubuntu from windows, the hard drive will be mounted on /mnt/c/ (important if you want to convert files stored in the windows filesystem, e.g. on your Desktop)

### Usage
1. Change to the directory containing the file you want to convert

   `cd DIRECTORY`

2. Execute OCRmyPDF with the following command (replace a.pdf and o.pdf with the appropiate names):
    
   `ocrmypdf a.pdf --output-type pdf o.pdf`

## Reducing size of scanned PDFs (pdf2ps in Ubuntu)
I haven't tried in Mac, but must be possible. As for Windows, you can install the Ubuntu terminal from the Windows Store and execute the same steps as for Ubuntu (actually that is what I did).
1. Open a terminal
2. Execute (replace BIGFILE.pdf and SMALLFILE.pdf with the appropiate names)
   `ps2pdf -dPDFSETTINGS=/ebook BIGFILE.pdf SMALLFILE.pdf`



## References
1. https://play.google.com/store/apps/details?id=com.voyagerx.scanner&hl=en&gl=US
1. [OCRmyPDF Documentation](https://ocrmypdf.readthedocs.io/en/latest/index.html)
2. https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file
