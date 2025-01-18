---
layout: post
title:  "Tools for scanning into PDF and performing OCR"
date:   2020-10-27 15:10:00 +0900
categories: general
comments: true
---

**Contents**
* TOC
{:toc}

## Scanning documents to PDF (using vFlat)
vFlat is an android/iPhone app that makes it very fast to scan books to JPG and export to PDF either in Color or Grayscale. I tried other apps, but this is the easiest and it is free. Now they limit the PDF conversion functionality, but you can export to JPG files and then follow the steps in a later section to convert to PDF. 
https://play.google.com/store/apps/details?id=com.voyagerx.scanner&hl=en&gl=US

## OCRmyPDF (Tool for making scanned PDFs searchable)
Here I put a brief explanation of how to install and use OCRmyPDF, but you can see detailed instructions in [OCRmyPDF Documentation](https://ocrmypdf.readthedocs.io/en/latest/index.html)

### Installation on Mac
1. Install using the following command:
``brew install ocrmypdf``

### Installation on Ubuntu
1. Install using the following command:
``sudo apt-get install ocrmypdf``
``sudo apt install tesseract-ocr-jpn``
``sudo apt install tesseract-ocr-jpn-vert``

### Installation on Windows
Install "Ubuntu" (WSL) from the Windows Store to have access to an Ubuntu terminal from Windows and install from there using the previous instructions. 

NOTE: when using Ubuntu from windows, the hard drive will be mounted on /mnt/c/ (important if you want to convert files stored in the windows filesystem, e.g. on your Desktop)

### Usage
1. Change to the directory containing the file you want to convert

   `cd DIRECTORY`

2. Execute OCRmyPDF with the following command (replace a.pdf and o.pdf with the appropiate names):
    
   `ocrmypdf input.pdf --output-type pdf output.pdf`

3. For Japanese (or other languages) just add the option -l with the appropiate option

   `ocrmypdf -l jpn input.pdf --output-type pdf output.pdf`


## Reducing size of scanned PDFs
Reference: [https://pandemoniumillusion.wordpress.com/2008/05/07/compress-a-pdf-with-pdftk/](https://pandemoniumillusion.wordpress.com/2008/05/07/compress-a-pdf-with-pdftk/)
```
pdf2ps large.pdf very_large.ps; ps2pdf very_large.ps small.pdf
```

## Convert epub to pdf

```
sudo apt-get install calibre
```
```
ebook-convert file.epub file.pdf
```

## Convert folder of jpg files to pdf (OCR and small pdf size)
1. First rename files with the numbering with leading zeros (so that the order is correct when creating the PDF from JPGs)
```
for f in *; do num=$(echo "$f" | grep -o -E '[0-9]+'); newnum=$(printf "%03d" "$num"); mv "$f" "${f/$num/$newnum}"; done
```
2. Convert JPGs to PDF (reducing size by 50%)
```
convert *.jpg -resize 50% p50.pdf
```
3. Reduce size of PDF
```
pdf2ps p50.pdf large.ps; ps2pdf large.ps small.pdf
```
4. Perform OCR (select the language)
```
ocrmypdf -l eng small.pdf --output-type pdf small-ocr.pdf
```
```
ocrmypdf -l jpn small.pdf --output-type pdf small-ocr.pdf
```


## One-liners 
This is the same code as above but in a single line. 
- English
```
for f in *; do num=$(echo "$f" | grep -o -E '[0-9]+'); newnum=$(printf "%03d" "$num"); mv "$f" "${f/$num/$newnum}"; done; convert *.jpg -resize 50% p50.pdf; pdf2ps p50.pdf large.ps; ps2pdf large.ps small.pdf; 
ocrmypdf -l eng small.pdf --output-type pdf small-ocr.pdf
```
- Japanese
```
for f in *; do num=$(echo "$f" | grep -o -E '[0-9]+'); newnum=$(printf "%03d" "$num"); mv "$f" "${f/$num/$newnum}"; done; convert *.jpg -resize 50% p50.pdf; pdf2ps p50.pdf large.ps; ps2pdf large.ps small.pdf; 
ocrmypdf -l jpn small.pdf --output-type pdf small-ocr.pdf
```

## Fix problem with numbering 
1. Rename to file.pdf
2. Convert pdf to jpgs
```
convert file.pdf f-%d.jpg
```
3. Set numbering starting from 1 instead of 0
```
NUM_PAGES=$(($(ls -1|wc -l)-1));
for i in $(eval echo {0..$((NUM_PAGES-1))}); do mv f-${i}.jpg g-$((i+1)).jpg; done
```
4. Rename names according to lexicographical order
```
i=1; for j in $(echo $(eval echo {1..${NUM_PAGES}}) | tr ' ' '\n' | sort); do mv g-${i}.jpg h-${j}.jpg; i=$((i+1)); done 
```
5. Rename with leading zeros
```
for i in $(eval echo {1..${NUM_PAGES}}); do new_num=$(printf "%03d" $i); mv h-${i}.jpg i-${new_num}.jpg; done
```
6. Convert to pdf again; reduce size; ocr (jpn in this case)
```
convert *.jpg p50.pdf; pdf2ps p50.pdf large.ps; ps2pdf large.ps small.pdf; ocrmypdf -l jpn small.pdf --output-type pdf small-ocr.pdf
```
## Fix problem with numbering (single line command)
- English
```
convert file.pdf f-%d.jpg; NUM_PAGES=$(($(ls -1|wc -l)-1)); for i in $(eval echo {0..$((NUM_PAGES-1))}); do mv f-${i}.jpg g-$((i+1)).jpg; done; i=1; for j in $(echo $(eval echo {1..${NUM_PAGES}}) | tr ' ' '\n' | sort); do mv g-${i}.jpg h-${j}.jpg; i=$((i+1)); done ; for i in $(eval echo {1..${NUM_PAGES}}); do new_num=$(printf "%03d" $i); mv h-${i}.jpg i-${new_num}.jpg; done; convert *.jpg p50.pdf; pdf2ps p50.pdf large.ps; ps2pdf large.ps small.pdf; ocrmypdf -l eng small.pdf --output-type pdf small-ocr-eng.pdf
```
- Japanese
```
convert file.pdf f-%d.jpg; NUM_PAGES=$(($(ls -1|wc -l)-1)); for i in $(eval echo {0..$((NUM_PAGES-1))}); do mv f-${i}.jpg g-$((i+1)).jpg; done; i=1; for j in $(echo $(eval echo {1..${NUM_PAGES}}) | tr ' ' '\n' | sort); do mv g-${i}.jpg h-${j}.jpg; i=$((i+1)); done ; for i in $(eval echo {1..${NUM_PAGES}}); do new_num=$(printf "%03d" $i); mv h-${i}.jpg i-${new_num}.jpg; done; convert *.jpg p50.pdf; pdf2ps p50.pdf large.ps; ps2pdf large.ps small.pdf; ocrmypdf -l jpn small.pdf --output-type pdf small-ocr-jpn.pdf
```


## References
1. https://play.google.com/store/apps/details?id=com.voyagerx.scanner&hl=en&gl=US
1. [OCRmyPDF Documentation](https://ocrmypdf.readthedocs.io/en/latest/index.html)
2. https://askubuntu.com/questions/113544/how-can-i-reduce-the-file-size-of-a-scanned-pdf-file
