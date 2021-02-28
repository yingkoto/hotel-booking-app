<template>
  <div class="mybookings">
    <h4>This is example template</h4>
    <!----------------Booking CRUD Table ----------------->
    <v-data-table :headers="headers" :items="HotelRoomList" :search="search" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="subtitle-2">My Bookings</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--------- Search data table ---------->
        <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search for Bookings" single-line hide-details></v-text-field>
            <v-divider class="mx-2" inset vertical></v-divider>
        </v-card-title>
        
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <!----------------- Edit Table Data ------------------->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.roomimage" label="Room Image"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.roomtype" label="Room Type"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.bookingdate" label="BookingDate"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.numberofadult" label="Number Of Adults"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.numberofchildren" label="Number Of Children"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.checkindate" label="Check-In Date"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.checkoutdate" label="Check-Out Date"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      // data search
      search: '',
      headers: [
        {
          text: 'Room Image',
          align: 'start',
          sortable: false,
          value: 'roomimage',
        },
        { text: 'Room Type', value: 'roomtype' },
        { text: 'Booking Date', value: 'bookingdate' },
        { text: 'Number of Adult', value: 'numberofadult' },
        { text: 'Number of Children', value: 'numberofchildren' },
        { text: 'Check-In Date', value: 'checkindate' },
        { text: 'Check-Out Date', value: 'checkoutdate' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      HotelRoomList: [],
      editedIndex: -1,
      editedItem: {
        roomimage: 'Image here',
        roomtype: '',
        bookingdate: 0,
        numberofadult: 0,
        numberofchildren: 0,
        checkindate: 0,
        checkoutdate: 0
      },
      defaultItem: {
        roomimage: 'Image here',
        roomtype: '',
        bookingdate: 0,
        numberofadult: 0,
        numberofchildren: 0,
        checkindate: 0,
        checkoutdate: 0
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.HotelRoomList = [
          {
            roomimage: 'Room 1', // image goes here
            roomtype: 'Deluxe Suite',
            bookingdate: '9/09/20',
            numberofadult: '2',
            numberofchildren: '0',
            checkindate: '12/09/20',
            checkoutdate: '14/09/20'
          },
          {
            roomimage: 'Room 2', // image goes here
            roomtype: 'Royal Suite',
            bookingdate: '2/03/20',
            numberofadult: '3',
            numberofchildren: '1',
            checkindate: '3/03/20',
            checkoutdate: '6/03/20'
          },
          {
            roomimage: 'Room 3', // image goes here
            roomtype: 'Premier Suite',
            bookingdate: '25/04/20',
            numberofadult: '2',
            numberofchildren: '2',
            checkindate: '27/05/20',
            checkoutdate: '29/05/20'
          },
          {
            roomimage: 'Room 4', // image goes here
            roomtype: 'Ocean View Suite',
            bookingdate: '3/03/20',
            numberofadult: '2',
            numberofchildren: '0',
            checkindate: '14/03/20',
            checkoutdate: '20/03/20'
          },
          {
            roomimage: 'Room 5', // image goes here
            roomtype: 'Golf View',
            bookingdate: '24/05/20',
            numberofadult: '3',
            numberofchildren: '0',
            checkindate: '5/06/20',
            checkoutdate: '8/06/20'
          },
          {
            roomimage: 'Room 6', // image goes here
            roomtype: 'Royal Premier Suite',
            bookingdate: '6/12/20',
            numberofadult: '2',
            numberofchildren: '0',
            checkindate: '8/12/20',
            checkoutdate: '14/12/20'
          },
          {
            roomimage: 'Room 7', // image goes here
            roomtype: 'Grand Suite',
            bookingdate: '20/11/20',
            numberofadult: '2',
            numberofchildren: '0',
            checkindate: '23/11/20',
            checkoutdate: '26/11/20'
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.HotelRoomList.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.HotelRoomList.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.HotelRoomList.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.HotelRoomList[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>