<template>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignUp">
                  <v-layout row>
                    <v-flex x12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id = "email"
                        v-model="email"
                        type="email"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex x12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id = "password"
                        v-model="password"
                        type="password"
                        :rules="[validPassword]"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex x12>
                      <v-text-field
                        name="confirmPassword"
                        label="Confirm Password"
                        id = "confirmPassword"
                        v-model="confirmPassword"
                        type="password"
                        :rules="[comparePasswords]"
                        required></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12>
                      <v-btn type="submit">Sign Up</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      validPassword () {
        return this.password.length <= 5 ? 'Password is too short min 6 characters' : ''
      },
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignUp () {
        if (this.comparePasswords) {
          return
        }
        if (this.validPassword) {
          return
        }
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
    }
  }
</script>
