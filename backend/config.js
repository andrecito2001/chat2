// En tu archivo config.js
module.exports = {
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000/",
    PORT: process.env.PORT || 3000 // Corrección: elimina el "PORT =" de esta línea
  };
  