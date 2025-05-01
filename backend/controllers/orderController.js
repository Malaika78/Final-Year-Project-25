import Stripe from "stripe";

import orderModel from "./../models/orderModel.js";
import userModel from "./../models/userModel.js";
import {
  getSocketIdByUserId,
  getSocketServerInstance,
} from "../utils/socketStore.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order for frontend
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";
  const io = getSocketServerInstance();
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    let order = await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "pkr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 300,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: "lkr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });
    io.emit("admin-response", {
      message: "New order has been placed",
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// listing orders for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ date: -1 });
    console.log(orders);
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api for updating order status
const updateStatus = async (req, res) => {
  try {
    const io = getSocketServerInstance();
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    const order = await orderModel.findById(req.body.orderId);

    if (!order) {
      return res.status(404).send("Order not found");
    }

    const itemNames = order.items.map((item) => item.name).join(", ");
    const totalItems = order.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const orderSummary = `Your order ${itemNames}, is `;

    const userSocketId = getSocketIdByUserId(order.userId);
    if (userSocketId) {
      // notification to client
      let statusMessage = "";
      switch (req.body.status) {
        case "Food Processing":
          statusMessage = `${orderSummary}being prepared.`;
          break;
        case "Out for delivery":
          statusMessage = `${orderSummary}on its way to your address.`;
          break;
        case "Delivered":
          statusMessage = `${orderSummary}successfully delivered. Enjoy your meal!`;
          break;
        default:
          statusMessage = "Your order status has been updated!";
          break;
      }

      // Emit the appropriate status update to the client
      io.to(userSocketId).emit("order-status-update", {
        message: statusMessage,
      });
    }

    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
