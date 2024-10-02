function setCurrency({ quantity, language = 'en-US', currency = 'USD' }: { quantity: number; language?: string; currency?: string }) {
  return quantity.toLocaleString(language, { style: 'currency', currency })
}

export { setCurrency }
