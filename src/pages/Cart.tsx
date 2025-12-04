import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import coffeeImage from "@/assets/coffee-beans.jpg";

const Cart = () => {
  const { user } = useAuth();
  const { items, loading, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  if (!user) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center">
          <div className="container-custom text-center">
            <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Sign in to view your cart</h1>
            <p className="text-muted-foreground mb-6">You need to be logged in to access your cart</p>
            <Button asChild>
              <Link to="/auth">Sign In</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  const handleCheckout = async () => {
    setIsCheckingOut(true);

    // Create order
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .insert({ user_id: user.id, total: totalPrice, status: "pending" })
      .select()
      .single();

    if (orderError) {
      toast({ title: "Error", description: "Failed to create order", variant: "destructive" });
      setIsCheckingOut(false);
      return;
    }

    // Create order items
    const orderItems = items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.product.price,
    }));

    const { error: itemsError } = await supabase.from("order_items").insert(orderItems);

    if (itemsError) {
      toast({ title: "Error", description: "Failed to save order items", variant: "destructive" });
      setIsCheckingOut(false);
      return;
    }

    // Clear cart
    await clearCart();
    setOrderPlaced(true);
    setIsCheckingOut(false);
  };

  if (orderPlaced) {
    return (
      <Layout>
        <section className="section-padding min-h-[60vh] flex items-center">
          <div className="container-custom text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Thank you for your order. We'll contact you shortly to confirm delivery details.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild>
                <Link to="/coffee">
                  Continue Shopping
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/coffee">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Your Cart</h1>
              <p className="text-muted-foreground">{totalItems} items</p>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-12 h-12 text-muted-foreground animate-pulse mx-auto mb-4" />
              <p className="text-muted-foreground">Loading cart...</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some delicious coffee to get started</p>
              <Button asChild>
                <Link to="/coffee">
                  Browse Coffee
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-card rounded-2xl p-4 shadow-custom-sm flex gap-4">
                    <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={coffeeImage} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{item.product.name}</h3>
                      <p className="text-muted-foreground text-sm">{item.product.size} • {item.product.type}</p>
                      <p className="text-primary font-semibold mt-1">ETB {item.product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-card rounded-2xl p-6 shadow-custom-md sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.product.name} × {item.quantity}
                        </span>
                        <span className="text-foreground font-medium">
                          ETB {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">ETB {totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button onClick={handleCheckout} className="w-full" size="lg" disabled={isCheckingOut}>
                    {isCheckingOut ? "Processing..." : "Place Order"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-muted-foreground text-xs text-center mt-4">
                    By placing your order, you agree to our terms and conditions
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
