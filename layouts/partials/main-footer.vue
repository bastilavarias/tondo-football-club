<template>
  <footer class="primary white--text" id="main-footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <h1 class="title  white--text">Contact</h1>
          <v-row align="center" justify="start">
            <template v-for="(contact, index) in content.contacts">
              <v-chip color="transparent" text-color="white" :key="index">
                <v-avatar left>
                  <v-icon>{{contact.iconName}}</v-icon>
                </v-avatar>
                <span>{{contact.name}}</span>
              </v-chip>
            </template>
          </v-row>
        </v-col>
        <v-col cols="12" md="2">
          <h1 class="title  white--text">Follow Us</h1>
          <template v-for="(link, index) in content.socialLinks">
            <v-btn icon class="white--text"
                   :href="link.url"
                   target="_blank">
              <v-icon>{{link.iconName}}</v-icon>
            </v-btn>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>

    const content = {
        contacts: [
            {
                iconName: "mdi-cellphone",
                name: "+639368984428"
            },
            {
                iconName: "mdi-email",
                name: "TondoFutbolClub08@gmail.com"
            },
            {
                iconName: "mdi-map-marker",
                name: "353N1 Pilapil St. Tondo Manila, Philippines"
            },
        ],
        socialLinks: [
            {
                iconName: "mdi-facebook",
                url: "https://www.facebook.com/Tondo.FC/"
            },
            {
                iconName: "mdi-instagram",
                url: "https://www.instagram.com/tondo_fc/"
            },
        ]

    };

    export default {
        name: "main-footer",

        data() {
            return {
                content
            };
        }
    };
</script>

<style scoped>
  #main-footer {
    background-image: url("../../assets/backgrounds/footer.png");
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
