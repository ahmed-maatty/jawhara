const input = document.getElementById('f1');
const label = document.getElementById('fileLabel');

function updateFileName() {
    const fileName = input.files[0] ? input.files[0].name : 'Upload or drop your CV';

    if (fileName !== 'Upload or drop your CV') {
        label.innerHTML = `<i class="fa-duotone fa-solid fa-files"></i> ${fileName}`;
    } else {
        label.innerHTML = fileName;
    }
}

input.addEventListener('input', updateFileName);

label.addEventListener('dragover', (event) => {
    event.preventDefault();
    label.classList.add('drag-over');
});

label.addEventListener('dragleave', () => {
    label.classList.remove('drag-over'); 
});

label.addEventListener('drop', (event) => {
    event.preventDefault();
    label.classList.remove('drag-over');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        input.files = files; 
        updateFileName();
    }
});