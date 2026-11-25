"use client";

import { CartProvider, useCart } from "@/context/CartContext";
import AddedToBagDrawer from "@/components/AddedToBagDrawer";

function GlobalBagDrawer() {
  const { drawerOpen, closeDrawer, activeItem, updateQty } = useCart();

  if (!activeItem) return null;

  return (
    <AddedToBagDrawer
      open={drawerOpen}
      onClose={closeDrawer}
      product={{
        brand: activeItem.brand,
        name: activeItem.name,
        price: activeItem.price,
        image: activeItem.image,
      }}
      qty={activeItem.qty}
      onQtyChange={(qty) => updateQty(activeItem.href, qty)}
    />
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <GlobalBagDrawer />
    </CartProvider>
  );
}
