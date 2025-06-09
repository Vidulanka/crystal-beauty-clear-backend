import Product from "../models/product.js";

export async function createProduct(req, res) {
  if (req.user==  null) {
    res.status(403).json({
      message: "You need to login first"
    })
    return;
  }
 if (req.user.role != "admin") {
    res.status(403).json({
      message: "You are not authorized to create a product"
    })
    return;
  }

  const product = new Product(req.body);
  try {
    await product.save()  
    res.json({
      message:"Product saved successfully"
      
    })
  }catch (err) {
    console.log(err);
    res.status(500).json({
      message:"Produt not saved"
    })
  }

}

// changing the code
export function getProducts(req, res) {
  Product.find().then(
    (products) => {
        res.json(products)
    }
  ).catch(
    (err)=>{
       
        res.status(500).json({
            message:"Product not saved"
        })
    }
  )
}
export function deleteProduct(req, res) {
  if (!req.user) {
    return res.status(403).json({
      message: "You need to login first"
    });
  }

  Product.findOneAndDelete({ productID: req.params.productId })// modal eke use kare productID nam me than walath ProductID wenn oni
    .then(() => {
      res.json({
        message: "Product deleted successfully"
      });
    })
    .catch((err) => {
      console.error("Delete error:", err);
      res.status(500).json({
        message: "Product not deleted"
      });
    });
}

export function updateProduct(req, res) {
  if (req.user==  null) {
    res.status(403).json({
      message: "You need to login first"
    })
    return;
  }

  const exsistingProduct = Product.findOne({
    productID: req.params.productId
  })

  if (!exsistingProduct) {
    res.status(404).json({
      message: "Product not found"
    })
    return;
  }
  Product.findOneAndUpdate({
    productID: req.params.productId
  },req.body).then(
    () => {
        res.json({
            message:"Product updated successfuly"
        })
    }
  ).catch(
    (err)=>{
       
        res.status(500).json({
            message:"Product not updated"
        })
    }
  )


}