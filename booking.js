function formValidation(){
const form=
document.getElementById('bookingform');
const phoneInput=
document.getElementById('phone');
const phoneError=
document.getElementById('phoneError')
form.addEventListener('submit',function(e){
    e.preventDefault()
    phoneError.textContent='';
    const phone= phoneInput.value.trim();
    const phoneRegex= /^\d{10}$/;
    if(!phoneRegex.test(phone)){
        phoneError.textContent='phone number must be exactly 10 digits.';
        phoneInput.focus();
        return;
    }
    const name=
    document.getElementById('name').value;
    const date=
    document.getElementById('date').value;
    const time=
    document.getElementById('time').value;

    form.reset();
})
}

function selection(){
    let selectedArea=null;
    const indoorBtn=
    document.getElementById('indoor');
      const outdoorBtn=
    document.getElementById('outdoor');
      const selectedText=
    document.getElementById('selected-area');

    indoorBtn.addEventListener('click',function(){
        selectedArea="indoor";
        selectedText.textContent="you selected indoor";
        indoorBtn.classList.add('selected');
        outdoorBtn.classList.remove('selected')
    });
    outdoorBtn.addEventListener('click', ()=>{
      selectedArea="outdoor";
      selectedArea.textContent="you have selected outdoor";
      outdoorBtn.classList.add('selected');
      indoorBtn.classList.remove('selected ');
    });
}
formValidation();
