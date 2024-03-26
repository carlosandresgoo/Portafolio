import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  private pdfUrl: string = 'assets/Carlos_Andrés_Ruiz.pdf.pdf';

  getPdfUrl(): string {
    return this.pdfUrl;
  }
}
