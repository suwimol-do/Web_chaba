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
            <a href="locationone">ปราสาทศรีขมรภูมิ</a>
          </a-menu-item>

          <a-menu-item key="4">
            วนอุทยานแห่งชาติพนมสวาย<a href="locationtwo"
              >วนอุทยานแห่งชาติพนมสวาย</a
            >
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
            ศาลหลักเมืองสุรินทร์ <a href="Locationten"></a
          ></a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="Locationeleven"></a
          ></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>Service</span></span>
          <a-menu-item key="6">
            Service 1 <a href="serviceone">บริการที่ใกล้กับปราสาทศรีขมรภูมิ</a>
          </a-menu-item>
          <a-menu-item key="8">
            Service 2
            <a href="servicetwo">บริการที่ใกล้กับวนอุทยานแห่งชาติพนมสวาย</a>
          </a-menu-item>
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
          <a-breadcrumb-item>About</a-breadcrumb-item>

          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <h1>ประวัติเมืองสุรินทร์</h1>
          <img alt="Vue " src="../assets/คำขวัญ.png" />
          <img alt="Vue " src="../assets/ตรา.png" style="width: 14%" />

          <div style="background-color: #ececec; padding: 20px">
            <a-row :gutter="16">
              <a-col :span="8">
                <a-card title="คำขวัญ" :bordered="false">
                  <p>
                    สุรินทร์ถิ่นช้างใหญ่ ผ้าไหมงาม ประคำสวย ร่ำรวยปราสาท<br />
                    ผักกาดหวาน ข้าวสารหอม งามพร้อมวัฒนธรรม
                  </p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="ที่ตั้ง" :bordered="false">
                  <p>
                    ถนนหลักเมือง ตำบลในเมือง อำเภอเมืองสุรินทร์ จังหวัดสุรินทร์
                    32000
                  </p>
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="จังหวัด" :bordered="false">
                  <p>
                    สุรินทร์ เป็นจังหวัดหนึ่งในภาคตะวันออกเฉียงเหนือตอนล่าง<br />
                    มีชื่อเสียงด้านการเลี้ยงช้าง มีประชากรมากเป็นอันดับที่ 11<br />
                  </p>
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