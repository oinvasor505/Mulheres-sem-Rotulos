function EnviarFormularioJs()
{
  Notification.requestPermission().then(function (result)
  {
    if (result === "granted")
    {
      var notification = new Notification("Formulario enviado!",
      {
        body: "Aguarde o nosso contato pelo email!😀 ⏳"
      });

      notification.onclick = function ()
      {
        alert("Fique por dentro das novidades no Instagram 📷 @mulheressemrotulos");
      };
    }
  });
  
  alert("Formulario enviado!😀, Aguarde o nosso contato pelo email! 📧⏳");
  alert("Fique por dentro das novidades no Instagram📷 @mulheressemrotulos");
}