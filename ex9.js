var pass = "76431f";
var vemdopost = "37756d43";

if (pass == vemdopost) {
  document.write("<p>Parabéns, você acessou com sucesso</p>");
}
else{
  document.write("<p>Login:</p>");
  document.write("<form action='index.html' method='post'>");
  document.write("<input type='text' name='user' placeholder='Usuario'>");
  document.write("<input type='password' name='Pass' placeholder='Senha'>");
  document.write("</form>");
};