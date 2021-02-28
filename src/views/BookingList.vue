<template>
  <div class="bookinglist">
     <!---------Hotel Room Lists ------------>
      <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/hotel_room_queen_bedroom.png" alt="queen bedroom" height="200px"></v-img>

      <v-card-title class="body-1">Queen Bedroom Ocean Silk</v-card-title>

      <v-card-actions>
      <!------------------------Modal Box form ------------------------------------>
       <v-row justify="center">
            <v-dialog v-model="dialog5" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog5 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog5 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This Queen Ocean Silk Bedroom feature a modern and cool look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-room-service</v-icon>
          <v-icon class="pr-4">mdi-glass-wine</v-icon>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>

  <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/hotel_room_King_bedroom_premier_suite.png" alt="king bedroom premier suite" height="200px"></v-img>

      <v-card-title class="body-1">King Bedroom Silk Premier</v-card-title>

      <v-card-actions>
        <!------------------------Modal Box form ------------------------------------>
        <v-row justify="center">
            <v-dialog v-model="dialog6" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" dense color="blue-grey darken-3" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog6 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog6 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
       
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This King Bedroom Premier Suite feature a modern look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-room-service</v-icon>
          <v-icon class="pr-4">mdi-glass-wine</v-icon>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>
    
  </v-card>

   <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/hotel_room_queen_bedroom_suite.png" alt="queen bedroom suite" height="200px"></v-img>

      <v-card-title class="body-1">King Bedroom Luxury Suite</v-card-title>

      <v-card-actions>
      <!------------------------Modal Box form ------------------------------------>
      <v-row justify="center">
            <v-dialog v-model="dialog7" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="date" dense color="blue-grey darken-3" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog7 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog7 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
      
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This King Bedroom Luxury Suite feature a modern look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-room-service</v-icon>
          <v-icon class="pr-4">mdi-glass-wine</v-icon>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>
    
  </v-card>

   <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/king_bedroom_luxury_suite.png" alt="king bedroom luxury suite" height="200px"></v-img>

      <v-card-title class="body-1">King Bedroom Deluxe</v-card-title>

      <v-card-actions>
      <!------------------------Modal Box form ------------------------------------>
      <v-row justify="center">
            <v-dialog v-model="dialog8" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog8 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog8 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
       
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This King Bedroom Deluxe feature a modern look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-room-service</v-icon>
          <v-icon class="pr-4">mdi-glass-wine</v-icon>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>
    
  </v-card>

   <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/hotel_room_single_bedroom_luxury.png" alt="single bedroom luxury" height="200px"></v-img>

      <v-card-title class="body-1">Single Bedroom Deluxe</v-card-title>

      <v-card-actions>
      <!------------------------Modal Box form ------------------------------------>
      <v-row justify="center">
            <v-dialog v-model="dialog9" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog9 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog9 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
       
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This Single Bedroom Deluxe feature a modern look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-room-service</v-icon>
          <v-icon class="pr-4">mdi-glass-wine</v-icon>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>
    
  </v-card>

   <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/hotel_room_King_bedroom.png" alt="king bedroom" height="200px"></v-img>

      <v-card-title class="body-1">King Bedroom Standard</v-card-title>

      <v-card-actions>
      <!------------------------Modal Box form ------------------------------------>
      <v-row justify="center">
            <v-dialog v-model="dialog10" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog10 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog10 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
       

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This King Bedroom Standard feature a modern look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>
    
  </v-card>

   <v-card class="mt-4" max-width="100%">
      <v-img src="@/assets/images/queen_bedroom_grand.png" alt="queen bedroom grand" height="200px"></v-img>

      <v-card-title class="body-1">Queen Bedroom Grand Suite</v-card-title>

      <v-card-actions>
      <!------------------------Modal Box form ------------------------------------>
      <v-row justify="center">
            <v-dialog v-model="dialog11" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="orange lighten-2" text dark v-bind="attrs" v-on="on">Book Now</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Book Now</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-file-input dense color="blue-grey darken-3" outlined label="Room Image" prepend-icon="mdi-file-image-outline pr-2"> 
                                </v-file-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Type" prepend-inner-icon="mdi-bed pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="Booking Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Adult" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Number of Children" prepend-inner-icon="mdi-account-multiple pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckIn Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field dense v-model="date" outlined label="CheckOut Date" prepend-inner-icon="mdi-calendar pr-2" readonly v-bind="attrs" v-on="on"></v-text-field>
                                </template>
                                <v-date-picker ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save"></v-date-picker>
                              </v-menu>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog11 = false">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog11 = false">Book Now</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          This Queen Bedroom Grand Suite feature a modern look.
          <v-spacer class="mt-3"></v-spacer>
          <v-icon class="pr-4">mdi-room-service</v-icon>
          <v-icon class="pr-4">mdi-glass-wine</v-icon>
          <v-icon class="pr-4">mdi-fridge</v-icon>
          <v-icon class="pr-4">mdi-air-conditioner</v-icon>
          <v-icon class="pr-4">mdi-wifi</v-icon>
        </v-card-text>
      </div>
    </v-expand-transition>
    
  </v-card>

  </div>
</template>

<script>
  export default {
    data: () => ({
      // modal box
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
      dialog10: false,
      dialog11: false,

      // card reveal
      show: false,

      // datepicker
      date: null,
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      }
    }
  }
</script>