import { SNACKBAR_VARIANTS } from '../../../constants/constants.js';
import showSnackbar from '../../snackbar/showSnackbar.js';

const onFileInputChange = (input) => {
  const file = input.files[0];
  let fileName = file.name;
  const maxLength = 20;

  if (file.name.length > maxLength) {
    const start = Math.floor((maxLength - 3) / 2);
    const end = fileName.length - Math.ceil((maxLength - 3) / 2);
    fileName = `${fileName.substring(0, start)}...${fileName.substring(end)}`;
  } else {
    fileName = file.name;
  }

  const nextElement = input.nextElementSibling;
  nextElement.innerHTML = fileName;
  handleFile();
};

function handleFile() {
  const nameInput = document.querySelector('#RTPJ');
  const materialDescriptionInputs = document.querySelectorAll('.material-description');
  const materialIndexInputs = document.querySelectorAll('.material-index');
  const materialPercentageInputs = document.querySelectorAll('.material-percentage');

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const xmlString = event.target.result;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

        const tablix4 = xmlDoc.getElementsByTagName('Tablix4')[0];
        const kodRTPJ = tablix4.getAttribute('Textbox82');

        nameInput.value = Number(kodRTPJ.match(/\d+/)[0]);

        const detailsCollection = xmlDoc.getElementsByTagName('Details_Collection')[0];
        const details = detailsCollection.getElementsByTagName('Details');

        for (let i = 0; i < details.length; i += 1) {
          const materialDescription = details[i].getAttribute('MATERIAL_DESCRIPTION');
          const material1 = details[i].getAttribute('MATERIAL1');
          const percentage = details[i].getAttribute('Percentage');

          materialDescriptionInputs[i].value = `${materialDescription.substring(0, 15)}...`;
          materialIndexInputs[i].value = Number(material1);
          materialPercentageInputs[i].value = Number(percentage);
        }
      } catch (error) {
        showSnackbar('Błąd odczytu pliku!', SNACKBAR_VARIANTS.error);
      }
    };

    reader.readAsText(file);
  } else {
    showSnackbar('Plik nie jest zaznaczony!', SNACKBAR_VARIANTS.error);
  }
}

export default onFileInputChange;
