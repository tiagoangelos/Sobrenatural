$('#form-action').on('submit', function(event) {
    event.preventDefault();

    const Nome = document.querySelector('#name');
    const Email = document.querySelector('#email');
    const Message = document.querySelector('#message');
    const BtnSendForm = document.querySelector("#submitButton");
    const MsgSendPrimary = document.querySelector('#msgFormPrimary');
    const MsgSendSecundary = document.querySelector('#msgFormSecundary');
    const loading = document.querySelector('#loading');

    Nome.disabled = true;
    Email.disabled = true;
    Message.disabled = true;
    BtnSendForm.disabled = true;
    BtnSendForm.style.display = 'none';
    loading.style.display = 'flex';

    var data = {
        service_id: 'service_4xply48',
        template_id: 'template_ng2ty29',
        user_id: 'kxcg6OYQr9njIZWhz',
        
        template_params: {
            from_name: Nome.value,
            email: Email.value,
            message: Message.value
        }
    };
    
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
    }).done(function() {
        BtnSendForm.style.display = 'none';
        loading.style.display = 'none';

        MsgSendPrimary.style.color = '#1ABC9C';
        MsgSendPrimary.textContent = 'Obrigado Pelo Contato :)';
        MsgSendSecundary.textContent = 'Em Breve Retornaremos Sua Mensagem!';

    }).fail(function(error) {
        Nome.disabled = false;
        Email.disabled = false;
        Message.disabled = false;
        BtnSendForm.disabled = false;
        BtnSendForm.textContent = 'Enviar'

        BtnSendForm.style.display = 'flex';
        loading.style.display = 'none';
        
        MsgSendPrimary.style.color = '#960a0b';
        MsgSendPrimary.textContent = 'Algo Deu Errado :(';
        MsgSendSecundary.textContent = 'Tente Novamente!';
    });

})