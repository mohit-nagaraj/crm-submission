import { Router } from "express";
import { getContacts } from "../controllers/contact/contactQuery.js";
import {
  createContact,
  deleteContact,
  updateContact,
} from "../controllers/contact/contactModify.js";

const contactRouter = Router();

contactRouter.get("/", getContacts);
contactRouter.post("/", createContact);
contactRouter.put("/:id", updateContact);
contactRouter.delete("/:id", deleteContact);

export default contactRouter;
