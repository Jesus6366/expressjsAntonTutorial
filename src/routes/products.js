import Router from "express";

const router = Router();

router.get("/api/products", (req, res) => {
  console.log(req.headers.cookie);
  console.log(req.cookies);
  if (req.cookies.hello && req.cookies.hello === "world") {
    return res.status(200).json([{ id: 1, name: "Chicke leg", price: 1.2 }]);
  }

  return res.send({ msg: "Sorry you need the cookies" });
});

export default router;
