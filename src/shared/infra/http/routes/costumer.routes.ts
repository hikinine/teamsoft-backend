import { Router } from "express";
import { costumerController } from "../controllers"


const route = Router(); 

route.post("/", costumerController.create)
route.put("/:id", costumerController.updateById)
route.delete("/:id", costumerController.deleteById)

route.get("/", costumerController.findAll)
route.get("/:id_or_cnpj", costumerController.findByCnpjOrId)

export { route as costumerRoute }