<template>
  <div id="detail">
    <div class="image">
      <img :src="infophoto.photo" alt="Foto" style="object-fit: contain" />
    </div>
    <div class="info">
      <div class="text">
        <i class="fas fa-times" style="cursor: pointer" @click.prevent="closedetail"></i>
        <div class="nama">
          <p v-text="name">Maulana Ghozi</p>
          <hr />
        </div>

        <div class="caption" style="margin-top:20px">
          <p
            v-text="infophoto.caption"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perspiciatis voluptas, mollitia dolorem impedit magni laudantium velit repellat nihil fugiat eaque, ipsam sequi culpa modi placeat esse laborum sit officia.</p>
        </div>

        <div class="tags" style="margin-top:20px; margin-bottom: 10px">
          <vs-chip v-for="(tag, i) in infophoto.tags" :key="i">{{tag}}</vs-chip>
        </div>

        <div class="button">
          <button
            v-on:click.prevent="shareFb(infophoto.photo)"
            data-js="facebook-share"
            class="btn"
            id="shareBtn"
          >
            <i class="fab fa-facebook-f"></i>
          </button>

          <button
            v-on:click.prevent="shareTwitter(infophoto.photo)"
            data-js="twitter-share"
            class="btn"
            id="shareBtn"
          >
            <i class="fab fa-twitter"></i>
          </button>
        </div>
      </div>
      <i
        class="fas fa-trash-alt"
        style="align-self:flex-end; cursor:pointer"
        @click.prevent="removephoto(infophoto._id)"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ""
    };
  },
  props: ["infophoto"],
  methods: {
    closedetail() {
      this.$emit("getclosedetail");
    },
    shareFb(url) {
      let facebookShare = document.querySelector('[data-js="facebook-share"]');
      let facebookWindow = window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" + url,
        "facebook-popup",
        "height=450,width=650"
      );
      if (facebookWindow.focus) {
        facebookWindow.focus();
      }
      return false;
    },
    shareTwitter(url) {
      let twitterWindow = window.open(
        "https://twitter.com/share?url=" + url,
        "twitter-popup",
        "height=450,width=650"
      );
      if (twitterWindow.focus) {
        twitterWindow.focus();
      }
      return false;
    },
    removephoto(id) {
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          axios({
            method: `delete`,
            url: `http://34.70.15.199/boost/${id}`,
            headers: {
              token: localStorage.getItem("token")
            }
          })
            .then(() => {
              this.$emit("fatchdata");
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }
  },
  created() {
    this.name = localStorage.getItem("name");
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#detail {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  height: 500px;
  width: 500px;
}

.info {
  background-color: #f5f5f5;
  width: 300px;
  height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text {
  display: flex;
  flex-direction: column;
}
</style>