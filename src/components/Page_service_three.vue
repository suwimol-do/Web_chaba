<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <!-- Carousel -->
      <a-carousel autoplay>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/1.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/2.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/3.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/4.png" /></h3>
        </div>
      </a-carousel>
      <!-- | -->
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['25']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>Home</span>
          <a href="home">Home</a>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="smile" />
          <span>About</span>
          <a href="about">About</a>
        </a-menu-item>
        <!-- Location -->
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>Location</span></span>
          <a-menu-item key="3">
            ปราสาทศรีขมรภูมิ
            <a href="locationone"></a>
          </a-menu-item>
          <a-menu-item key="4">
            วนอุทยานแห่งชาติพนมสวาย<a href="locationtwo"></a>
          </a-menu-item>
          <a-menu-item key="5">
            หมู่บ้านช้างตากลาง
            <a href="locationthree"></a
          ></a-menu-item>
          <a-menu-item key="6">
            ปราสาทหินบ้านพลวง
            <a href="locationfour"></a
          ></a-menu-item>
          <a-menu-item key="7">
            วัดบูรพาราม
            <a href="locationfive"></a
          ></a-menu-item>
          <a-menu-item key="8">
            อ่างเก็บน้ำห้วยเสนง <a href="locationsix"></a
          ></a-menu-item>
          <a-menu-item key="9">
            อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="locationseven"></a>
          </a-menu-item>
          <a-menu-item key="10">
            หมู่บ้านทอผ้าไหมบ้านท่าสว่าง <a href="locationeight"></a
          ></a-menu-item>
          <a-menu-item key="11">
            ศาลหลักเมืองสุรินทร์ <a href="locationnine"></a
          ></a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="locationten"></a
          ></a-menu-item>
        </a-sub-menu>

        <!-- Product -->
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="shopping" /><span>Product</span></span
          >
          <a-menu-item key="13">
            สินค้าขึ้นชื่อของปราสาทศรีขมรภูมิ<a href="Productone"></a>
          </a-menu-item>
          <a-menu-item key="14">
            สินค้าขึ้นชื่อของวนอุทยานแห่งชาติพนมสวาย<a href="Producttwo"></a>
          </a-menu-item>
          <a-menu-item key="15">
            สินค้าขึ้นชื่อของหมู่บ้านช้างตากลาง<a href="Productthree"></a>
          </a-menu-item>
          <a-menu-item key="16">
            สินค้าขึ้นชื่อของปราสาทหินบ้านพลวง<a href="Productfour"></a>
          </a-menu-item>
          <a-menu-item key="17">
            สินค้าขึ้นชื่อของวัดบูรพาราม<a href="Productfive"></a>
          </a-menu-item>
          <a-menu-item key="18">
            สินค้าขึ้นชื่อของอ่างเก็บน้ำห้วยเสนง <a href="Productsix"></a>
          </a-menu-item>
          <a-menu-item key="19">
            สินค้าขึ้นชื่อของอนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง<a
              href="Productseven"
            ></a>
          </a-menu-item>
          <a-menu-item key="20">
            สินค้าขึ้นชื่อของหมู่บ้านทอผ้าไหมบ้านท่าสว่าง<a
              href="Producteight"
            ></a>
          </a-menu-item>
          <a-menu-item key="21">
            สินค้าขึ้นชื่อของศาลหลักเมืองสุรินทร์<a href="Productnine"></a>
          </a-menu-item>
          <a-menu-item key="22">
            สินค้าขึ้นชื่อของตลาดช่องจอม<a href="Productten"></a>
          </a-menu-item>
        </a-sub-menu>
        <!-- | -->

        <!-- Service -->
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="shop" /><span>Service</span></span>
          <a-menu-item key="23">
            บริการที่ใกล้กับปราสาทศรีขมรภูมิ <a href="serviceone"></a>
          </a-menu-item>
          <a-menu-item key="24">
            บริการที่ใกล้กับวนอุทยานแห่งชาติพนมสวาย
            <a href="servicetwo"></a>
          </a-menu-item>
          <a-menu-item key="25">
            บริการที่ใกล้กับหมู่บ้านช้างตากลาง
            <a href="servicethree"></a>
          </a-menu-item>
          <a-menu-item key="26">
            บริการที่ใกล้กับปราสาทหินบ้านพลวง
            <a href="servicefour"></a>
          </a-menu-item>
          <a-menu-item key="27">
            บริการที่ใกล้กับวัดบูรพาราม
            <a href="servicefive"></a>
          </a-menu-item>
          <a-menu-item key="28">
            บริการที่ใกล้กับอ่างเก็บน้ำห้วยเสนง
            <a href="servicesix"></a>
          </a-menu-item>
          <a-menu-item key="29">
            บริการที่ใกล้กับอนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="serviceseven"></a> </a-menu-item
          ><a-menu-item key="30">
            บริการที่ใกล้กับหมู่บ้านทอผ้าไหมบ้านท่าสว่าง
            <a href="serviceeight"></a> </a-menu-item
          ><a-menu-item key="31">
            บริการที่ใกล้กับศาลหลักเมืองสุรินทร์
            <a href="servicenine"></a> </a-menu-item
          ><a-menu-item key="32">
            บริการที่ใกล้กับตลาดช่องจอม
            <a href="serviceten"></a>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- | -->
    <!-- Carousel -->
    <a-layout>
      <a-carousel autoplay>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/11.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/22.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/33.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/44.png" /></h3>
        </div>
      </a-carousel>
      <!-- | -->
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>
            บริการที่ใกล้กับหมู่บ้านช้างตากลาง</a-breadcrumb-item
          >
          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!-- เปลี่ยนข้อมูลข้างล่าง -->
          <a-tabs>
            <a-tab-pane key="1" tab="ที่พัก">
              <div>
                <a-row>
                  <a-col :span="12">
                    <div>
                      <a-card title="บัลลังก์ โฮเต็ล" style="width: 500px">
                        <a
                          slot="extra"
                          href="https://th.hotels.com/ho615191264/ballangk-hotel-risxrth-x-nd-sra-way-na-thatum-thiy/?modal=dp"
                          >สอบถามได้ที่</a
                        >
                        <img
                          alt="Vue "
                          src="../assets/รร.3.jpg"
                          style="width: 300px"
                        />
                        <br />
                        <br />
                        <br />
                        <p>ราคาพักเริ่มต้น 261 บาท/คืน</p>
                        <p>
                          131 M.10 Ban Banlang, Surin / Thatum, สุรินทร์ 32120
                        </p>
                        <p>เบอร์ติดต่อ : 0935727231</p>
                      </a-card>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div>
                      <a-card title="ชื่อที่พัก" style="width: 500px">
                        <a slot="extra" href="https://okayresort.business.site/"
                          >สอบถามได้ที่</a
                        >
                        <img
                          alt="Vue "
                          src="../assets/รร.4.jpg"
                          style="width: 300px"
                        />
                        <br />
                        <br />
                        <br />
                        <p>ราคาพักเริ่มต้น - บาท/คืน</p>
                        <p>
                          196 Moo2 Tambon Chompholburi อำเภอ ชุมพลบุรี สุรินทร์
                          32190
                        </p>
                        <p>เบอร์ติดต่อ : 0838414170</p>
                      </a-card>
                      <br />
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-tab-pane>
            <a-tab-pane key="2" tab="ร้านอาหาร">
              <div>
                <a-row>
                  <a-col :span="12">
                    <div>
                      <a-card title="Maneewan Cafe'" style="width: 500px">
                        <a
                          slot="extra"
                          href="https://retty.co.th/restaurant/41441/"
                          >สอบถามได้ที่</a
                        >
                        <img
                          alt="Vue "
                          src="../assets/ส้มตำ.jpg"
                          style="width: 300px"
                        />
                        <br />
                        <br />
                        <br />
                        <p>เปิด : วันจันทร์-วันอาทิตย์ 8:00–20:00</p>
                        <p>199 Elephant Village, Thatoom สุรินทร์</p>
                        <p>เบอร์ติดต่อ : 0810631920</p>
                      </a-card>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div>
                      <a-card
                        title="ร้านเตี๋ยว ต้ม ยำ #byสมปองandfamily"
                        style="width: 500px"
                      >
                        <a
                          slot="extra"
                          href="https://thaiwhere.org/%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/restaurant-place-f3bce0940555a26eb7bb4a38724e3926.html#gsc.tab=0"
                          >สอบถามได้ที่</a
                        >
                        <img
                          alt="Vue "
                          src="../assets/ก๋วย.jpg"
                          style="width: 300px"
                        />
                        <br />
                        <br />
                        <br />
                        <p>เปิด :วันจันทร์-วันอาทิตย์ 10:00–21:00</p>
                        <p>ตำบล กระโพ อำเภอ ท่าตูม สุรินทร์ 32120</p>
                        <p>เบอร์ติดต่อ : 044145075</p>
                      </a-card>
                      <br />
                    </div>
                  </a-col>
                </a-row>
              </div>
            </a-tab-pane>
          </a-tabs>

          <!-- | -->
        </div>
      </a-layout-content>

      <!-- | -->

      <a-layout-footer style="text-align: center">
        Surin tourism website ©2021 Created by NONG CHABA TEAM
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
/* Carousel */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>