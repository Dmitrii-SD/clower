const fileAdd = document.querySelector('#File-add');
const fileName = document.querySelector('#filename');
const previewBox = document.querySelector('.preview-box');
const inputFile = document.querySelector('input[type="file"]');


fileAdd.addEventListener("change", function() {
    previewBox.style.display = "inline-block";
    fileName.innerHTML = inputFile.files[0].name;
})