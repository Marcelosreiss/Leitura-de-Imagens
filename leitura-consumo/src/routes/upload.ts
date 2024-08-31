import express, {Request, Response} from "express"

// Pra poder separa a aplicação em routes e controllers, tu import o express e cria uma variável
// com o método Router()
const uploadRoute = express.Router()

// Aí depois tu usa essa variável pra criar as rotas normalmente igual aqui embaixo
uploadRoute.post('/upload', async (req: Request, res: Response) => {
  const { image, customer_code, measure_datetime, measure_type } = req.body;


  // Validação básica dos dados
  if (!image || !customer_code || !measure_datetime || !measure_type) {
      return res.status(400).json({
          error_code: "INVALID_DATA",
          error_description: "Os dados fornecidos no corpo da requisição são inválidos."
      });
  }

  // Integrar com API Google Gemini (placeholder)
  // const measureValue = await callGeminiAPI(image);

  // Placeholder response
  res.status(200).json({
      image_url: "https://temp-image-url.com",
      measure_value: 123,
      measure_uuid: "some-uuid"
  });
});

// Depois tu exporta essa rota pra poder fazer a aplicação consumir ela
export default uploadRoute


