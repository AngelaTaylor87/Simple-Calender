var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

function userContent() {
    document.getElementById('true').contentEditable = true;
}


const saveBtn = getById('save');
const editElement = getById('userContent')
saveBtn.enabled = true;

editElement.addEventListener('click', function () {
    if ( editElement.innerHTML !== originalContent ) {
      saveBtn.enabled = true;
    }
  });

  saveBtn.addEventListener('click', function() {
      if ( updatedContent !== originalContent )
      updated = getById('userContent').innerHTML;
  })

window.localStorage.getItem("true");