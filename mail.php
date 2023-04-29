<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$name = $_POST['name'];
$tel = $_POST['tel'];

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  $mail->Host       = 'smtp.mail.ru';
  $mail->Username   = '';
  $mail->Password   = '';
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('', 'Заявка с сайта http://blanchard-gallery.idowebsites.ru');

  $mail->addAddress('');
  $mail->addAddress('');

  $title = "Заявка с сайта http://blanchard-gallery.idowebsites.ru";
  $body = "
  <h2>Новая заявка с сайта</h2>
  <b>Имя:</b> $name<br>
  <b>Контактный телефон: </b> $tel
  ";

  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
}
catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
?>
