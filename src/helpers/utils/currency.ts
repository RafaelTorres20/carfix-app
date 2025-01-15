export const formatCurrency = (text:string) => {
    const formattedText = Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(text.replace(/\D/g, '')) /100);
    return formattedText;
  }
