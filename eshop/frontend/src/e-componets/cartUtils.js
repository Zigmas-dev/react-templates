export const calculateCartTotals = (cart) => {
    let totalWithVat = 0;
    cart.forEach((item) => {
      totalWithVat += item.price * item.quantity;
    });
  
    const vatRate = 0.21;
    const vat = totalWithVat * (vatRate / (1 + vatRate));
    const subtotal = totalWithVat - vat;
  
    return { subtotal, vat, total: totalWithVat };
  };