<template>
  <div class="body">
    <div class="wrapper01">
      <div class="section01 container">
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
          <img
            class="section01-41"
            src="../assets/img/home/apple-logo.png"
            alt=""
          />
          <div class="section01-42">
            <p>Không cần cài đặt ứng dụng</p>
            <p>Tương thích với cả iOS và Android</p>
          </div>
          <img
            class="section01-43"
            src="../assets/img/home/android-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="wrapper02">
      <div class="container section02">
        <div class="row section02-1">
          <p>Cách sử dụng thẻ thông minh Tapply</p>
      </div>
      <div class="row section02-2">
        <div class="col-md-6 right section02-21">
            <img src="../assets/img/home/section02-1.png" alt="#" class="img-fluid">
        </div>
        <div class="col-md-6 left section02-22">
          <img src="../assets/img/home/section02-2.png" alt="#" class="img-fluid">
          <h1>Tính năng "CHẠM"</h1>
          <p>CHẠM thẻ vào Smartphone của đối tác để hiển thị thông tin liên hệ của bạn lên máy người đó.</p>
          <img src="../assets/img/home/section02-3.png" alt="#" class="img-fluid">
          <h1>Tính năng "QUÉT"</h1>
          <p>Hoặc đối tác của bạn cũng có thể QUÉT MÃ QR CODE bằng camera ở mặt sau thẻ của bạn</p>
        </div>
      </div>
      </div>

    </div>

    <!-- Section 3 -->
    <div class="wrapper03">
      <div class="container section03">
        <div class="row section03-1">
          <h1>Những gì bạn có thể chia sẻ</h1>
          <p><strong>"Một chạm để chia sẻ, một chạm để kết nối"</strong>, Card visit điện tử Tapply đang dần thay thế Card visit truyền thống vì những tính năng ưu việt mà nó mang lại.</p>
        </div>
        <div class="row section03-2">
          <div class="col-md-6">
             <img src="../assets/img/home/section03-1.png" alt="#" class="img-fluid">
          </div>
          <div class="col-md-6">
            <div >
              <img src="../assets/img/home/section03-2.png" alt="#" class="img-fluid">
              <h1>Chia sẻ Liên kết mạng xã hội</h1>
              <p>Các liên kết Facebook, Instagram, Tiktok, Zalo, Twitter, Snapchat,... (và nhiều hơn thế nữa)</p>
            </div>
            <div >
              <img src="../assets/img/home/section03-3.png" alt="#" class="img-fluid">
              <h1>Chia sẻ Danh bạ</h1>
              <p>Người khác LƯU DANH BẠ của bạn chỉ với 1 chạm</p>
            </div>
            <div >
              <img src="../assets/img/home/section03-4.png" alt="#" class="img-fluid">
              <h1>Chia sẻ Địa chỉ</h1>
              <p>Chỉ với một chạm, bạn có thể chia sẻ Email, Website, SĐT, Địa chỉ,....</p>
            </div>
            <div >
              <img src="../assets/img/home/section03-5.png" alt="#" class="img-fluid">
              <h1>Tích hợp ví Momo</h1>
              <p>Tích hợp Momo giúp người khác chuyển tiền nhanh hơn</p>
            </div>
          </div>
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
        text-transform: uppercase;
        &1 {
          @include textFormat(400, 24px);
        }
        &2 {
          @include textFormat(700, 28px);
        }
      }
      &-3 {
        margin: 65px auto;
        font-weight: 450;
        padding: 16px 42.5px;
        background-color: white;
        height: 56px;
        width: 182px;
        border-radius: 8px;
        @include textFormat(450, 16px) a {
          text-decoration: none;
          color: black;
          &:hover {
            cursor: pointer;
          }
        }
      }
      &-4 {
        width: 417px;
        height: 72px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 55px auto 110px;
        &1 {
          height: 32px;
        }
        &3 {
          height: 32px;
        }
      }
    }
  }

  .wrapper02{
    background: url("../assets/img/home/background02.png");
    background-size: cover;
    .section02{
      &-1{
        padding-top: 124px;
        text-transform: uppercase;
        text-align: center;
        @include textFormat(700,34px )
      }
      &-2{
        margin-top:71px;
        padding-bottom: 70px;
        &1{
          text-align: center;
        }
        &2{
          max-width: 409px;
          margin: 60px 0;
          h1{
            @include textFormat(450,20px );
          }
          p{
             @include textFormat(400,16px );
          }
        }
      }
    }
  }
}
</style>