# Encrypt

A simple React application for encrypting and decrypting text using a custom bitwise algorithm.

## Features
- Encrypt plain text into an encoded string
- Decrypt encoded text back to its original form
- Real-time conversion as you type
- Copy results to the clipboard with one click
- Word and character counts for quick summaries
- Responsive UI built with Bootstrap and Font Awesome icons

## How it works
The encryption algorithm performs the following steps:
1. Convert each character to its 8‑bit binary representation.
2. Concatenate all bits and pad the string so its length is a multiple of six.
3. Invert each bit (0 ↔ 1).
4. Split into 6‑bit groups and convert each to a printable ASCII character by adding 47.

Decryption reverses the above process, recovering the original text from the encoded string.

## Getting Started
Install dependencies and start the development server:

```bash
npm install
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to use the app.

## Scripts
| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Executes the test suite. |
| `npm run build` | Builds a production-ready bundle. |

## Project Structure
```
src/
├── components/
│   ├── About.js        # Project overview page
│   ├── Footer.js       # Social links footer
│   ├── Navbar.js       # Navigation bar
│   └── TextForm.js     # Encryption/Decryption logic
├── App.js              # Routes and layout
└── index.js            # Application entry point
```

## License
This project is open source and available under the MIT License.

