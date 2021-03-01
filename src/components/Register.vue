<template>
    <div class="register">
        <h3 class="font-weight-regular text-center ml-8 pt-3 pb-3">Register Account</h3>
        <!----------------- Register Form ----------------->
        <v-form>
            <v-container>
                <v-text-field v-model="username" :error-messages="usernameErrors" required @input="$v.username.$touch()" @blur="$v.username.$touch()" 
                dense color="blue-grey darken-3" outlined label="Username" prepend-inner-icon="mdi-account pr-2">
                </v-text-field>
                <v-text-field v-model="password" :error-messages="passwordErrors" required @input="$v.password.$touch()" @blur="$v.password.$touch()"
                dense color="blue-grey darken-3" outlined label="Password" prepend-inner-icon="mdi-lock pr-2">
                </v-text-field>
                <v-text-field 
                dense color="blue-grey darken-3" outlined label="Firstname" prepend-inner-icon="mdi-account pr-2">
                </v-text-field>
                <v-text-field 
                dense color="blue-grey darken-3" outlined label="Surname" prepend-inner-icon="mdi-account pr-2">
                </v-text-field>
                <v-text-field 
                dense color="blue-grey darken-3" outlined label="Phone Number" prepend-inner-icon="mdi-phone pr-2">
                </v-text-field>
                <v-text-field 
                dense color="blue-grey darken-3" outlined label="Email Address" prepend-inner-icon="mdi-email pr-2">
                </v-text-field>
                <v-btn class="blue-grey darken-3 white--text" width="100%">Register<v-icon right>mdi-send</v-icon></v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    
}
</script>