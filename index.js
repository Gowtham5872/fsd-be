const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
let rooms = [];
let bookings = [];
app.post('/rooms', (req, res) => {
  const { seats, amenities, pricePerHour } = req.body;
  const roomId = rooms.length + 1;
  const room = {
    id: roomId,
    seats,
    amenities,
    pricePerHour
  };
  rooms.push(room);
  res.status(201).json(room);
});
app.post('/bookings', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  const bookingId = bookings.length + 1;
  const booking = {
    id: bookingId,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
    status: 'Booked'
  };
  bookings.push(booking);
  res.status(201).json(booking);
});
app.get('/rooms/booked', (req, res) => {
  const bookedRooms = rooms.map(room => {
    const bookingsForRoom = bookings.filter(booking => booking.roomId === room.id);
    return {
      roomName: `Room ${room.id}`,
      bookedStatus: bookingsForRoom.length > 0 ? 'Booked' : 'Available',
      bookings: bookingsForRoom.map(booking => ({
        customerName: booking.customerName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime
      }))
    };
  });
  res.json(bookedRooms);
});
app.get('/customers/booked', (req, res) => {
  const customersWithBookings = [];
  bookings.forEach(booking => {
    const room = rooms.find(room => room.id === booking.roomId);
    customersWithBookings.push({
      customerName: booking.customerName,
      roomName: `Room ${room.id}`,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime
    });
  });
  res.json(customersWithBookings);
});
app.get('/customers/booking-count', (req, res) => {
  const bookingCount = {};
  bookings.forEach(booking => {
    const key = `${booking.customerName}-${booking.roomId}-${booking.date}-${booking.startTime}-${booking.endTime}`;
    if (bookingCount[key]) {
      bookingCount[key].count++;
    } else {
      bookingCount[key] = {
        count: 1,
        bookingId: booking.id,
        bookingDate: booking.date,
        bookingStatus: booking.status
      };
    }
  });
  res.json(bookingCount);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






