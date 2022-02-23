import { Router } from "express";
import { addressController } from "../controllers";


const route = Router(); 

route.post("/:costumer_id", addressController.create)
//route.put("/:id", addressController.updateById)
//route.delete("/:id", addressController.deleteById)

route.get("/", addressController.findAll)
route.get("/:id", addressController.findById)
route.get("/costumer/:id", addressController.findByCostumerId)

export { route as addressRoute }