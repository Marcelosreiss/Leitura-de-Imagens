import express, {Request, Response} from "express"
const getRoute = express.Router()

getRoute.get('/:customer_code/list', (req: Request, res: Response) => {
  const { customer_code } = req.params;
  const { measure_type } = req.query;

  // Validação do tipo de medição
  if (measure_type && !['WATER', 'GAS'].includes(measure_type.toString().toUpperCase())) {
      return res.status(400).json({
          error_code: "INVALID_TYPE",
          error_description: "Tipo de medição não permitida."
      });
  }

  // Placeholder para a listagem de medidas
  res.status(200).json({
      customer_code,
      measures: [
          {
              measure_uuid: "uuid1",
              measure_datetime: new Date(),
              measure_type: "WATER",
              has_confirmed: true,
              image_url: "https://temp-image-url.com"
          }
      ]
  });
});

export default getRoute
