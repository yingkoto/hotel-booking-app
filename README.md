## Royal Shoreline Hotel Booking App
### Elevator Pitch
A hotel booking system for customers to make reservations on the go and skip the queue. 
Customers can manage their booking details using the app.

### To Do List
```
- Connect Localhost server (Frontend and Backend)
- Create SQL Database
- Form Validation using Vee-validate (third-party plugin)
```
### CRUD Matrix
```
| ACTION             | CREATE | READ | UPDATE | DELETE |
|--------------------|--------|------|--------|--------|
| Register and Login |    *   |   *  |    *   |        |
| Add Room           |    *   |   *  |        |        |
| Update Room        |        |      |    *   |        |
| Delete Room        |        |      |        |    *   |
| View Bookings      |        |   *  |        |        |
| Logout             |        |      |        |    *   |
| Delete Account     |        |      |        |    *   |
| Make Booking       |    *   |      |        |        |
| Delete Booking     |        |      |        |    *   |
| Update Booking     |        |      |    *   |        |
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
