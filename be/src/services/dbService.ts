// Later replace with Prisma/SQLite
let bookings: any[] = [];
let orders: any[] = [];

export const saveBooking = async (data: any) => {
  const booking = { id: bookings.length + 1, ...data };
  bookings.push(booking);
  return booking;
};

export const saveOrder = async (data: any) => {
  const order = { id: orders.length + 1, ...data };
  orders.push(order);
  return order;
};
