<template>
    <div class="bookingform">
        <v-card class="form-container">
            <v-row justify="center">
            <v-dialog v-model="dialog1" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="pa-5" width="200" v-bind="attrs" v-on="on"><v-icon class="pr-3">mdi-bed</v-icon>Add Room</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Add Room</span>
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
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Price" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Description" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog1 = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog1 = false">Add Room</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        </v-card>
          <!---------------------Modal form box ------------------->
          <v-card class="form-container">
            <v-row justify="center">
            <v-dialog v-model="dialog2" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="pa-5" width="200" v-bind="attrs" v-on="on"><v-icon class="pr-3">mdi-bed</v-icon>Update Room</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Update Room</span>
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
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Price" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Room Description" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog2 = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog2 = false">Update Room</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        </v-card>
        <!----------------------------------Modal form box ----------------------------------->
        <v-card class="form-container">
            <v-row justify="center">
            <v-dialog v-model="dialog3" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="pa-5" width="200" v-bind="attrs" v-on="on"><v-icon class="pr-3">mdi-trash-can-outline</v-icon>Delete Room</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Delete Room</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Delete Room" prepend-inner-icon="mdi-trash-can-outline pr-2">
                                </v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog3 = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog3 = false">Delete Room</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        </v-card>
        <!----------------------------------Modal form box ----------------------------------->
        <v-card class="form-container">
            <v-row justify="center">
            <v-dialog v-model="dialog4" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="pa-5" width="200" v-bind="attrs" v-on="on"><v-icon class="pr-3">mdi-account</v-icon>Update Account</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Update Account Details</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Username" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Password" prepend-inner-icon="mdi-lock pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Firstname" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Surname" prepend-inner-icon="mdi-account pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field dense color="blue-grey darken-3" outlined label="Phone Number" prepend-inner-icon="mdi-phone pr-2">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field dense color="blue-grey darken-3" outlined label="Email Address" prepend-inner-icon="mdi-email pr-2">
                              </v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog4 = false">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="dialog4 = false; /* update function */">Update Account</v-btn>
                        </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
        </v-card>
        <!------------- Dark mode --------------->
        <v-card height="108" class="darkmode-container">
            <p class="body-2 text-center">Would you like to switch on Dark Mode?</p>
            <v-btn class="dark-btn ml-15 pa-5" width="200" @click="toggle_dark_mode">Dark Mode
                <v-icon class="pl-3">mdi-theme-light-dark</v-icon>
            </v-btn>
        </v-card>
    </div>
</template>

<style>
.form-container {
    margin-top: .8em;
    padding: 2em;
}

.darkmode-container {
    margin-top: .8em;
    padding-top: 1em;
    padding-bottom: 3em;
}

</style>

<script>
  export default {
    data: () => ({
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
    }),
    // dark theme toggle
    name: "BookingForm",
    methods: {
        toggle_dark_mode: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
        }
    },
    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    }
  }
</script>