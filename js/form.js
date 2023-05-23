function ValidationName(){
    if(document.querySelector('#name').value.length >= 3){
        const Name = document.querySelector('#name');
        Name.style.color = 'black';

        const MsgSpan = document.querySelector(".invalid-feedback-name");
        MsgSpan.textContent = '';
        EnabledBtnSendForm();
    }else{
        const Name = document.querySelector('#name');
        Name.style.color = 'red';

        const MsgSpan = document.querySelector(".invalid-feedback-name");
        MsgSpan.textContent = 'O Nome Deve Ter No Mínimo 3 Caractere!'
        MsgSpan.style.color = 'red';
        DisabledBtnSendForm();
    }
}

function ValidationEmail(){
    function ValidationFormatEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    ValidationFormatEmail(document.querySelector("#email").value)
    if(ValidationFormatEmail(document.querySelector("#email").value) == true){
        const Email = document.querySelector("#email");
        Email.style.color = 'black';

        const MsgSpan = document.querySelector(".invalid-feedback-email");
        MsgSpan.textContent = '';
        EnabledBtnSendForm();
    }else{
        const Email = document.querySelector("#email");
        Email.style.color = 'red';

        const MsgSpan = document.querySelector(".invalid-feedback-email");
        MsgSpan.textContent = 'Formatos Válidos: @gmail.com, @hotmail.com!'
        MsgSpan.style.color = 'red';
        DisabledBtnSendForm();
    }
}

function ValidationText(){
    if(document.querySelector('#message').value.length >= 3){
        const Message = document.querySelector('#message');
        Message.style.color = 'black';

        const MsgSpan = document.querySelector(".invalid-feedback-message");
        MsgSpan.textContent = '';
        EnabledBtnSendForm();
    }else{
        const Message = document.querySelector('#message');
        Message.style.color = 'red';

        const MsgSpan = document.querySelector(".invalid-feedback-message");
        MsgSpan.textContent = 'A Mensagem Deve Ter No Minímo 3 Caractere!'
        MsgSpan.style.color = 'red';
        DisabledBtnSendForm();
    }
}

function DisabledBtnSendForm(){
    const BtnSendForm = document.querySelector("#submitButton");
    BtnSendForm.disabled = true;
}

function EnabledBtnSendForm(){
    const BtnSendForm = document.querySelector("#submitButton");
    BtnSendForm.disabled = false;
}