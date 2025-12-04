import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { Coffee, ShoppingCart, Plus, Minus, ArrowRight, Package } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";

interface Product {
  id: string;
  name: string;
  description: string | null;
  size: string;
  type: string;
  price: number;
  stock: number;
}

const NatysCoffee = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { user } = useAuth();
  const { addToCart, items, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("type", { ascending: true })
        .order("size", { ascending: true });

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
        const initialQuantities: Record<string, number> = {};
        data?.forEach((p) => (initialQuantities[p.id] = 1));
        setQuantities(initialQuantities);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    await addToCart(productId, quantities[productId] || 1);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta),
    }));
  };

  const roastedProducts = products.filter((p) => p.type === "roasted");
  const groundProducts = products.filter((p) => p.type === "ground");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-95" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold mb-4 animate-fade-up">Naty's Coffee Shop</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Premium Ethiopian
              <br />Coffee
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Experience the rich flavors of Ethiopia's finest coffee beans, expertly roasted and
              ground for the perfect cup.
            </p>
          </div>
        </div>
      </section>

      {/* Cart Summary (if user logged in and has items) */}
      {user && totalItems > 0 && (
        <div className="bg-accent/10 border-b border-accent/20">
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ShoppingCart className="w-5 h-5 text-accent" />
                <span className="text-foreground">
                  <strong>{totalItems}</strong> items in cart
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">ETB {totalPrice.toFixed(2)}</span>
              </div>
              <Button asChild size="sm" variant="hero">
                <Link to="/cart">
                  View Cart
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          {!user && (
            <div className="bg-secondary rounded-2xl p-6 mb-12 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Sign in to shop</h3>
                <p className="text-muted-foreground text-sm">Create an account or sign in to add items to your cart</p>
              </div>
              <Button asChild>
                <Link to="/auth">Sign In</Link>
              </Button>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <Coffee className="w-12 h-12 text-muted-foreground animate-pulse mx-auto mb-4" />
              <p className="text-muted-foreground">Loading products...</p>
            </div>
          ) : (
            <>
              {/* Roasted Coffee */}
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Roasted Coffee Beans</h2>
                    <p className="text-muted-foreground text-sm">Whole beans for freshest flavor</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {roastedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      quantity={quantities[product.id] || 1}
                      onQuantityChange={(delta) => updateQuantity(product.id, delta)}
                      onAddToCart={() => handleAddToCart(product.id)}
                      isLoggedIn={!!user}
                    />
                  ))}
                </div>
              </div>

              {/* Ground Coffee */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Ground Coffee</h2>
                    <p className="text-muted-foreground text-sm">Ready for brewing</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {groundProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      quantity={quantities[product.id] || 1}
                      onQuantityChange={(delta) => updateQuantity(product.id, delta)}
                      onAddToCart={() => handleAddToCart(product.id)}
                      isLoggedIn={!!user}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (delta: number) => void;
  onAddToCart: () => void;
  isLoggedIn: boolean;
}

const ProductCard = ({ product, quantity, onQuantityChange, onAddToCart, isLoggedIn }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-custom-sm hover-lift">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={coffeeImage}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {product.size}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium capitalize">
            {product.type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-primary">ETB {product.price.toFixed(2)}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuantityChange(-1)}
              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={() => onQuantityChange(1)}
              className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <Button onClick={onAddToCart} className="w-full">
          <ShoppingCart className="w-4 h-4" />
          {isLoggedIn ? "Add to Cart" : "Sign in to Buy"}
        </Button>
      </div>
    </div>
  );
};

export default NatysCoffee;
