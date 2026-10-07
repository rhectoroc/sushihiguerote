const QRCode = require('qrcode');
const Jimp = require('jimp');

async function createQR() {
  try {
    const url = 'https://sushihiguerote.com/';
    console.log('Generando QR para:', url);

    // 1. Generate QR Code image with High Error Correction Level
    // 'H' is required so the QR remains scannable even if the center is covered by a logo
    const qrImageBase64 = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 1000, // Very high resolution
      color: {
        dark: '#0f1115', // Dark color from the app theme
        light: '#ffffff'
      }
    });

    // Extract base64 payload
    const base64Data = qrImageBase64.replace(/^data:image\/png;base64,/, "");
    const qrBuffer = Buffer.from(base64Data, 'base64');

    // 2. Load the images using Jimp
    const qr = await Jimp.read(qrBuffer);
    const logo = await Jimp.read('public/images/416/11924210/logo2-removebg-preview.png');

    // 3. Resize logo to fit nicely in the center (about 25-30% of QR size)
    const logoWidth = qr.bitmap.width * 0.28;
    logo.resize(logoWidth, Jimp.AUTO);

    // Create a white background padding for the logo so it stands out from the QR dots
    const bg = new Jimp(logo.bitmap.width + 40, logo.bitmap.height + 40, '#ffffff');
    bg.composite(logo, 20, 20);

    // 4. Calculate position to center the logo
    const x = (qr.bitmap.width - bg.bitmap.width) / 2;
    const y = (qr.bitmap.height - bg.bitmap.height) / 2;

    // 5. Composite (Overlay) the logo onto the QR Code
    qr.composite(bg, x, y);

    // 6. Save the final image
    const outputPath = 'QR_Sushihiguerote.png';
    await qr.writeAsync(outputPath);
    
    console.log(`¡Éxito! El código QR ha sido guardado como: ${outputPath}`);
  } catch (error) {
    console.error('Error generando el QR:', error);
  }
}

createQR();
