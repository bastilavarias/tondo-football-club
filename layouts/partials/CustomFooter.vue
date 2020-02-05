<template>
  <section id="custom-footer">
    <footer style="background-color: #D02026" class="white--text">
      <v-container>
        <v-row>
          <v-col md="2">
            <p style="font-size: 1rem;">Our Socials</p>
            <v-btn icon class="white--text">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon class="white--text">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon class="white--text">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
          </v-col>
          <v-col md="2">
            <p style="font-size: 1rem;">Navigation</p>
            <v-btn text class="white--text text-capitalize d-block">Home</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Articles</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Team</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Game Schedule</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Programs</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Store</v-btn>
          </v-col>
          <v-col md="2">
            <p style="font-size: 1rem;">Support</p>
            <v-btn text class="white--text text-capitalize d-block">Terms and Condition</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Privacy Policy</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Frequently Ask Questions</v-btn>
          </v-col>
          <v-col md="3">
            <p style="font-size: 1rem;">Contact</p>
            <v-btn text class="white--text text-capitalize d-block">Telephone Number: 999+999</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Cellphone Number: 999+999</v-btn>
            <v-btn text class="white--text text-capitalize d-block">E-mail Address Number: 999+999</v-btn>
          </v-col>
          <v-col md="3">
            <p style="font-size: 1rem;">Address</p>
            <v-btn text class="white--text text-capitalize d-block">Telephone Number: 999+999</v-btn>
            <v-btn text class="white--text text-capitalize d-block">Cellphone Number: 999+999</v-btn>
            <v-btn text class="white--text text-capitalize d-block">E-mail Address Number: 999+999</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </footer>
  </section>
</template>

<script>
  export default {
      name: "custom-footer"
  }
</script>
