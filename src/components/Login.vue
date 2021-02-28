<template>
    <div class="login">
        <h3 class="font-weight-regular text-center ml-8 pt-3 pb-3">Login</h3>

        <!----------------- Login Form ----------------->
        <v-form>
            <v-container>
                <v-text-field dense color="blue-grey darken-3" outlined label="Username" prepend-inner-icon="mdi-account pr-2">
                </v-text-field>
                <v-text-field dense color="blue-grey darken-3" outlined label="Password" prepend-inner-icon="mdi-lock pr-2">
                </v-text-field>
                <v-btn class="blue-grey darken-3 white--text" width="100%">Login
                    <v-icon right>mdi-send</v-icon>
                </v-btn>
            </v-container>
        </v-form>

        <!------------Direct Link to register page ------------>
        <div id="quick-link">
            <router-link to="/register" tag="v-btn">
            <p>If not a member. Register Here</p>
            <v-btn color="blue-grey darken-3 white--text" flat value="register">
                <span>Register</span>
            </v-btn>
            </router-link>
        </div>
    </div>
</template>

<style>
#quick-link {
    text-align: center;
    margin-top: 2em;
}
</style>