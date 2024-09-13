import Router from "express";

const router = Router();

router.get("/api/products", (req, res) => {
  res.status(200).json([{ id: 1, name: "Chicke leg", price: 1.2 }]);
});

export default router;
