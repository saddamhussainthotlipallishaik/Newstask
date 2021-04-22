<template>
  <div>
    
      <div class="text-center second-section position-fixed">
        <div>
          <input type="file" ref="myFile" @change="UploadedPdf" />
        </div>
        <div>
          <button @click="rotate += 90">&#x27f3;</button>
          <button @click="rotate -= 90">&#x27f2;</button>
        </div>
        <div>
          <input v-model.number="pages" type="number" />/{{ numPages }}
          <button @click="$refs.pdf[0].print()">Print</button>
        </div>
        <div>
          <b-button @click="modifyPdf()">Download</b-button>
        </div>
      </div>
      <div v-if="show" class="third-section">
        <pdf
          class="pdf-section my-2"
          ref="pdf"
          v-for="i in numPages"
          :key="i"
          :src="docs"
          :page="i"
          :rotate="i === pages ? rotate : 0"
          @link-clicked="pages = $event"
        >
        </pdf>
        
      </div>
 
  </div>
</template>

<script>
import pdf from "vue-pdf";
import {PDFDocument, StandardFonts,rgb, degrees} from 'pdf-lib'
import download from 'downloadjs'
export default {
  name: "PracticePdf2",
  components: {
    pdf
  },
  data() {
    return {
      show: false,
      docs: "",
      numPages: 1,
      pages: 1,
      rotate: 0,
      time:null,
      src:""
    };
  },
  methods: {
    UploadedPdf(e) {
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.src = reader.result
        this.docs = pdf.createLoadingTask(reader.result);
        this.docs.promise.then(pdf => {
          this.numPages = pdf.numPages;
        });
        this.show = true;
      };
    },
    async modifyPdf() {
      const url = this.src
      console.log(this.src)
      const existingpdf = await fetch(url)
      const uint8array = new Uint8Array(existingpdf.arrayBuffer())
      const pdfDoc = await PDFDocument.load(uint8array)
      const pdfFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const pages = pdfDoc.getPages()
      const firstPage = pages[0]
      const { height} = firstPage.getSize()
      firstPage.drawText('Saddam Hussain', {
        x:5,
        y: height / 2 + 300,
        size: 50,
        font: pdfFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(180),
      })
      const pdfBytes = await pdfDoc.save()
      download(pdfBytes, "modified.pdf", "application/pdf")

    }
  }
};
</script>

<style scoped>
.pdf-section {
  border: 2px solid black;
  width: 60%;
  height: 100%;
  margin: auto;
}
.second-section {
  top: 0;
  z-index: 1000;
  background-color: yellowgreen;
  border: 2px solid black;
  width: 100%;
}
.third-section {
    justify-content: center;
    margin-top: 100px;

}
</style>