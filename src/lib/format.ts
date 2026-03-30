/** Format a number using the Indian numbering system with ₹ symbol */
export function formatINR(value: number): string {
  return "₹" + value.toLocaleString("en-IN");
}
