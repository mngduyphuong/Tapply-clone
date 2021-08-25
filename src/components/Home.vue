<template>
  <div class="body">
    <div class="wrapper01 ">
        
        <div class="  section01 container">
          <Menu></Menu>
          <div class="section01-1">
          <p>THẺ CÁ NHÂN THÔNG MINH</p>
        </div>
        <div class="section01-2">
          <p class="section01-21">Chia Sẻ Thông Tin</p>
          <p class="section01-22">Theo Xu Hướng Hiện Đại</p>
        </div>
        <div class="section01-3">
          <a href="#">MUA NGAY</a>
        </div>
        <div class="section01-4">
          <img src="../assets/img/home/apple-logo.png" alt="" />
          <div class="section01-41">
            <p>Không cần cài đặt ứng dụng</p>
            <p>Tương thích với cả iOS và Android</p>
          </div>
          <img src="../assets/img/home/android-logo.png" alt="" />
        </div>
        </div>
      
    </div>
  </div>
</template>

<script >
import Menu from "../components/MenuWhite";

export default {
  name: "Homepage",
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
@mixin textFormat($weight, $size) {
  font-size: $size;
  font-weight: $weight;
}
.body {
  font-family: "SVN-Gotham";
  .wrapper01 {
    background: url("../assets/img/home/background01.png");
    background-size: cover;
    color: white;
    height: 100vh;
    display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
    .section01 {
      text-align: center;
      
      &-1 {
        @include textFormat(700, 34px);
      }
      &-2 {
        margin-top: 45px;
        &1 {
          @include textFormat(40, 24px);
        }
        &2 {
          @include textFormat(450, 28px);
        }
      }
    }
  }
}
</style>