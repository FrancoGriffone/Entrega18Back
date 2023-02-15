import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
    productos: { type: Array},
    fecha: {
      type: Date,
      default: Date.now  
    }
});

export const CarritoModel = mongoose.model("carritos", carritoSchema);