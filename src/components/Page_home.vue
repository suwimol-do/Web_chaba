<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
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
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>Location</span></span>
          <a-menu-item key="3">
            ปราสาทศรีขมรภูมิ
            <a href="locationone"></a>
          </a-menu-item>
          <a-menu-item key="4">
            วนอุทยานแห่งชาติพนมสวาย
            <a href="locationtwo"></a>
          </a-menu-item>
          <a-menu-item key="5">
            หมู่บ้านช้างตากล้าว
            <a href="Locationthree"></a
          ></a-menu-item>
          <a-menu-item key="6">
            ปราสาทหินบ้านพลวง
            <a href="Locationfour"></a
          ></a-menu-item>
          <a-menu-item key="7">
            วัดบูรพาราม
            <a href="Locationfive"></a
          ></a-menu-item>
          <a-menu-item key="8">
            อ่างเก็บน้ำ ห้วยเสนง <a href="Locationsix"></a
          ></a-menu-item>
          <a-menu-item key="9">
            อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="Locationseven"></a>
          </a-menu-item>
          <a-menu-item key="10">
            หมู่บ้านทอผ้าไหมบ้านท่าสว่าง <a href="Locationeight"></a
          ></a-menu-item>
          <a-menu-item key="11">
            ศาลหลักเมืองสุรินทร์ <a href="Locationnine"></a>
          </a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="Locationten"></a
          ></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>Service</span></span>
          ปราสาทศรีขมรภูมิ
        </a-sub-menu>
        <a-menu-item key="15">
          <a-icon type="file" />
          <span>Gallery</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>

          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <h1></h1>

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

      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: "Page_home",
  props: {
    msg: String,
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>



