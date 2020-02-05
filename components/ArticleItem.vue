<template>
  <article>
    <v-card color="white" light>
      <v-container>
        <v-row>
          <v-col cols="5">
            <v-img
              height="auto"
              width="100%"
              src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
              contain
            ></v-img>
          </v-col>
          <v-col cols="7">
            <small class="grey--text">Posted on February 5, 2020</small>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolore dolorum earum esse eum,
               fugiat hic possimus soluta vel vitae....</p>
            <v-chip color="transparent">
              <v-avatar class="mr-1">
                <v-img
                  src="https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/15727324_1238747762858442_1300888075347317718_n.jpg?_nc_cat=103&_nc_eui2=AeFLomLelTL4YR6k_hcBQD73UPpZLCkupWtTptPB2waHNABJP8K5OV2PdAF0akBF51ZzKNWwOU8CkiujjKWFR2BFfmNXMZq4XT1Ex94akBEhhA&_nc_oc=AQmWnHQKQL2QXGmAe1cS90rzfjc4TGv182vwYO6wWCBzo2H0pkwdXY_cPhI9NqvowQY&_nc_pt=1&_nc_ht=scontent.fmnl5-1.fna&oh=f5e45c51bfc103aa03af24990f3b9838&oe=5E8FFAFB"></v-img>
              </v-avatar>
              Sebastian Curtis T. Lavarias
            </v-chip>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </article>
</template>

<script>
    export default {
        name: "article-item"
    };
</script>
