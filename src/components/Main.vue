<template>
  <div>
    <nav>
      <a id="logo" heref="#">
        <img src="../assets/logobc.png" alt="Logo" style="height: 61px" />
      </a>

      <i class="fas fa-sign-out-alt fa-2x" id="logout-btn" @click.prevent="logout"></i>
    </nav>
    <Detail v-if="detail" :infophoto="infophoto" @getclosedetail="closedetail" @fatchdata="fatch"></Detail>
    <main>
      <div class="container-main">
        <div id="upload">
          <div id="main-text">
            <p>Welcome to boostcolor!</p>
            <form enctype="multipart/form-data" @submit.prevent="uploadImg">
              <input type="file" ref="image" accept="image/*" @change="handleimage" required />
              <input type="submit" value="Get Colorized!" id="upload-btn" />
            </form>
          </div>
        </div>
        <div id="container-img">
          <div v-if="photos.length == 0">
            <h1>NO PHOTO</h1>
          </div>
          <div class="box-card" v-else>
            <div class="card" v-for="(p, i) in photos" :key="i">
              <img
                @click.prevent="toDetail(p)"
                :src="p.photo"
                alt="Avatar"
                style="width:100%; height : 293px; object-fit:contain; cursor: pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Detail from "../components/Detail";
export default {
  name: "Main",
  data: function() {
    return {
      photos: [],
      photo: null,
      infophoto: null,
      detail: false
    };
  },
  components: {
    Detail
  },
  methods: {
    closedetail() {
      this.detail = false;
    },
    logout() {
      localStorage.clear();
      this.$emit("logout", false);
    },
    toDetail(payload) {
      this.infophoto = payload;
      this.detail = true;
    },
    handleimage() {
      this.photo = this.$refs.image.files[0];
    },
    uploadImg() {
      let formData = new FormData();
      formData.append("photo", this.photo);

      Swal.fire({
        title: `Uploading .....`,
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: `post`,
        url: `http://34.70.15.199/boost`,
        data: formData,
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          this.fatch();
          Swal.close();
          Swal.fire("Success!", "Create Article Success", "success");
        })
        .catch(err => {
          let msg = error.response.data.message || "Create Article Failed";
          Swal.fire("Error!", msg, "error");
        })
        .finally(() => {
          this.photo = null;
        });
    },
    fatch() {
      axios({
        method: `get`,
        url: `http://34.70.15.199/boost`,
        headers: {
          token: localStorage.getItem("token"),
          userId: localStorage.getItem("id")
        }
      })
        .then(({ data }) => {
          this.photos = data;
          this.detail = false;
        })
        .catch(err => {
          let msg = error.response.data.message || "Create Article Failed";
          console.log(msg);
        });
    }
  },
  created() {
    this.fatch();
  }
};
</script>

<style scoped>
nav {
  height: 68px;
  width: 100%;
  display: flex;
  background-color: black;
  color: white;
  justify-content: space-between;
  align-items: center;
}

main {
  width: 100%;
  padding-top: 30px;
  min-height: calc(100vh - 68px);
  background: #f5f5f5;
}

.container-main {
  background: #f5f5f5;
  width: 90%;
  height: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

#upload {
  background: #f5f5f5;
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

#container-img {
  background: #f5f5f5;
  height: 100%;
  width: 100%;
  padding: 2rem;
}

#main-text {
  text-align: center;
}

#main-text p {
  font-size: 40px;
  width: 100%;
  text-align: center;
}

#main-text button {
  font-size: 20px;
  width: 5rem;
  height: 2rem;
  text-align: center;
}

.box-card {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;
  width: 1000px;
  padding-top: 10px;
  margin: 0 auto;
  justify-content: flex-start;
}
.card {
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 293px;
  height: 293px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(250, 250, 250, 0.2);
}
.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  height: 280px;
  justify-content: space-between;
}
#logout-btn {
  height: 2rem;
  margin-right: 1rem;
}

#upload-btn {
  width: 120px;
  height: 30px;
  color: #f5f5f5;
  font-size: 15px;
  background: #e48015;
  border: none;
  transition: 0.3s;
}

#upload-btn:hover {
  border: 1px solid black;
  background: #f5f5f5;
  color: black;
}
</style>