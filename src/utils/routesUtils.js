export const shouldShowMobileCart = (pathname) => {
  const cartRoutes = [
    "/kk",
    "/minuman",
    "/makanan",
    "/MenuDessert",
    "/MenuSnack",
    "/MenuPromo",
    "/MenuTerlaris",
    "/MenuTerbaru",
    "/MenuRekomendasi",
  ];
  return cartRoutes.includes(pathname);
};
