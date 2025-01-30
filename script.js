const shortenBtn = document.getElementById('shortenBtn');
const urlInput = document.getElementById('urlInput');
const resultDiv = document.getElementById('result');

shortenBtn.addEventListener('click', async () => {
  const longUrl = urlInput.value.trim();

  if (!longUrl) {
    alert('Please enter a valid URL');
    return;
  }

  try {
    const response = await fetch('https://api.short.io/links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'YOUR_SHORT_IO_API_KEY' // Replace with your API key
      },
      body: JSON.stringify({
        originalURL: longUrl,
        domain: 'yourdomain.short.io' // Replace with your domain
      })
    });

    const data = await response.json();
    if (data.shortURL) {
      resultDiv.innerHTML = `<a href="${data.shortURL}" target="_blank">${data.shortURL}</a>`;
    } else {
      resultDiv.textContent = 'Error shortening URL';
    }
  } catch (error) {
    resultDiv.textContent = 'An error occurred. Please try again.';
    console.error(error);
  }
});
