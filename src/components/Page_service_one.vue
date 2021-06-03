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
            <a href="locationtwo"></a
          ></a-menu-item>
          <a-menu-item key="5">
            หมู่บ้านช้างตากล้าว
            <a href="Locationthree"></a>
          </a-menu-item>
          <a-menu-item key="6">
            ปราสาทหินบ้านพลวง
            <a href="Locationfour"></a
          ></a-menu-item>
          <a-menu-item key="7">
            วัดบูรพาราม
            <a href="Locationfive"></a
          ></a-menu-item>
          <a-menu-item key="8">
            อ่างเก็บน้ำ ห้วยเสนง
            <a href="Locationsix"></a
          ></a-menu-item>
          <a-menu-item key="9">
            อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="Locationseven"></a>
          </a-menu-item>
          <a-menu-item key="10">
            หมู่บ้านทอผ้าไหมบ้านท่าสว่าง
            <a href="Locationeight"></a>
          </a-menu-item>
          <a-menu-item key="11">
            ศาลหลักเมืองสุรินทร์ <a href="Locationten"></a>
          </a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="Locationeleven"></a
          ></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>Service</span></span>
          <a-menu-item key="6">
            บริการที่ใกล้กับปราสาทศรีขมรภูมิ <a href="serviceone"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับวนอุทยานแห่งชาติพนมสวาย
            <a href="servicetwo"></a
          ></a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="file" />
          <span>Gallery</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item
            >บริการที่ใกล้กับปราสาทศรีขมรภูมิ</a-breadcrumb-item
          >

          <!-- เปลี่ยนข้อมูลข้างล่าง -->

          <div style="background-color: #ececec; padding: 20px">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card title="Card title" :bordered="false">
                  <p>card content</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Card title" :bordered="false">
                  <p>card content</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Card title" :bordered="false">
                  <p>card content</p>
                </a-card>
              </a-col>
            </a-row>
          </div>

          <div style="background-color: #ececec; padding: 20px">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card title="Card title" :bordered="false">
                  <p>card content</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Card title" :bordered="false">
                  <p>card content</p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Card title" :bordered="false">
                  <p>card content</p>
                </a-card>
              </a-col>
            </a-row>
          </div>

          <!-- | -->

          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        ></div>
      </a-layout-content>

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
  methods: {
    onChange(a, b, c, d) {
      console.log(a, b, c, d);
    },
  },
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>