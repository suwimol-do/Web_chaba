<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['2']" mode="inline">
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
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>
            สินค้าขึ้นชื่อของวนอุทยานแห่งชาติพนมสวาย</a-breadcrumb-item
          >
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!-- แก้ไข้ข้างล่าง -->
          <div style="background-color: #ececec; padding: 20px">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card title="ประวัติเมืองสุรินทร์" :bordered="false">
                  <p>รับชมเพิ่มเติม</p>
                  <img
                    slot="cover"
                    alt="example"
                    src="../assets/ช้าง.jpg"
                    width="390"
                    height="219"
                  />
                  <div>
                    <a-button type="primary" :size="size" href="about">
                      Click
                    </a-button>
                  </div>
                </a-card>
              </a-col>

              <a-col :span="8">
                <a-card title="สถานที่แนะนำ" :bordered="false">
                  <p>รับชมเพิ่มเติม</p>
                  <img
                    slot="cover"
                    alt="example"
                    src="../assets/ปราสาท3.jpg"
                    width="390"
                    height="219"
                  />
                  <div>
                    <a-button type="primary" :size="size" href="locationone">
                      Click
                    </a-button>
                  </div>
                </a-card>
              </a-col>

              <a-col :span="8">
                <a-card title="สินค้าร้านอาหารที่น่าสนใจ" :bordered="false">
                  <p>รับชมเพิ่มเติม</p>
                  <img
                    slot="cover"
                    alt="example"
                    src="../assets/ของฝาก.jpg"
                    width="390"
                    height="219"
                  />
                  <div>
                    <a-button type="primary" :size="size"> Click </a-button>
                  </div>
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
      </a-layout-content>

      <!-- | -->

      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
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
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>