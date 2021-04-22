<template>
    <div>
        <h1 class="text-center">PDF Creation</h1>
        <p>Click here to download</p>
        <button @click="createPdff()">Dowload</button>
    </div>
</template>

<script>
import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'
import download from 'downloadjs'
    export default {
        name:"PracticePDF",
       methods:{
            async createPdff(){
           const pdfDoc =  await PDFDocument.create()
           const pdfFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
           const page = pdfDoc.addPage()
           const { height } = page.getSize()
           const fontSize = 30
           page.drawText('Creating pdf', {
               x:50,
               y: height-4*fontSize,
               size: fontSize,
               font: pdfFont,
               color: rgb(0, 0.53, 0.71)
           })
           const pdfBytes = await pdfDoc.save()
           download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf")
        }
       }
    }
</script>

<style scoped>

</style>