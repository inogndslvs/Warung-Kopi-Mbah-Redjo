export const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };
  
  // Alternative simple version
  export const toRupiah = (number) => {
    return `Rp ${number.toLocaleString('id-ID')}`;
  };
  