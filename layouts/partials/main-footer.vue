<template>
  <footer class="primary white--text">
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <h1 class="title  white--text">Contact</h1>
          <v-row align="center" justify="start">
            <v-chip color="transparent" text-color="white">
              <v-avatar left>
                <v-icon>mdi-phone</v-icon>
              </v-avatar>
              1-779-62997
            </v-chip>
            <v-chip color="transparent" text-color="white">
              <v-avatar left>
                <v-icon>mdi-cellphone</v-icon>
              </v-avatar>
              09212709683
            </v-chip>
            <v-chip color="transparent" text-color="white">
              <v-avatar left>
                <v-icon>mdi-email</v-icon>
              </v-avatar>
              denzilbao@gmail.com
            </v-chip>
            <v-chip color="transparent" text-color="white">
              <v-avatar left>
                <v-icon>mdi-map-marker</v-icon>
              </v-avatar>
              Manila, Philippines
            </v-chip>
          </v-row>
        </v-col>
        <v-col cols="12" md="2">
          <h1 class="title  white--text">Follow Us</h1>
          <v-btn icon class="white--text"
                 href="https://www.facebook.com/Tondo.FC/?__tn__=kCH-R&eid=ARCcJ5wvzZk6Rt1bQ6Sbbt3xIcahjo8hgp9vi2ehQrjjGV5XLqlq13xNafDx7WPH8Z8D6tGFWDDd3Cmq&hc_ref=ARRppNLV--lBLkSB9Az5mJ7WcPdJDCAR2bfaEmBuEQTO09jCwKqINzEd2E7XAXoabvQ&fref=nf" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon class="white--text">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon class="white--text">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
    export default {
        name: "main-footer"
    };
</script>
