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
            หมู่บ้านช้างตากล้าว <a href="Locationthree"></a>
          </a-menu-item>
          <a-menu-item key="6">
            ปราสาทหินบ้านพลวง<a href="Locationfour"></a>
          </a-menu-item>
          <a-menu-item key="7">
            วัดบูรพาราม <a href="Locationfive"></a
          ></a-menu-item>
          <a-menu-item key="8">
            อ่างเก็บน้ำ ห้วยเสนง <a href="Locationsix"></a
          ></a-menu-item>
          <a-menu-item key="9">
            อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="Locationseven"></a>
          </a-menu-item>
          <a-menu-item key="10">
            หมู่บ้านทอผ้าไหมบ้านท่าสว่าง <a href="Locationeight"></a>
          </a-menu-item>
          <a-menu-item key="11">
            ศาลหลักเมืองสุรินทร์ <a href="Locationnine"></a
          ></a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="Locationten"></a
          ></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="shop" /><span>Service</span></span>
          <a-menu-item key="6">
            บริการที่ใกล้กับปราสาทศรีขมรภูมิ <a href="serviceone"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับวนอุทยานแห่งชาติพนมสวาย
            <a href="servicetwo"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับหมู่บ้านช้างตากล้าว
            <a href="servicethree"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับปราสาทหินบ้านพลวง
            <a href="servicefour"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับวัดบูรพาราม
            <a href="servicefive"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับอ่างเก็บน้ำห้วยเสนง
            <a href="servicesix"></a>
          </a-menu-item>
          <a-menu-item key="8">
            บริการที่ใกล้กับอนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="serviceseven"></a> </a-menu-item
          ><a-menu-item key="8">
            บริการที่ใกล้กับหมู่บ้านทอผ้าไหมบ้านท่าสว่าง
            <a href="serviceeight"></a> </a-menu-item
          ><a-menu-item key="8">
            บริการที่ใกล้กับศาลหลักเมืองสุรินทร์
            <a href="servicenine"></a> </a-menu-item
          ><a-menu-item key="8">
            บริการที่ใกล้กับตลาดช่องจอม
            <a href="serviceten"></a>
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
          <a-breadcrumb-item>หมู่บ้านช้างตากล้าว</a-breadcrumb-item>

          <div>
            <br /><br />
            <img alt="Vue " src="../assets/ช้าง.jpg" style="width: 35%" />

            <a-descriptions
              title="ข้อมูลสถานที่"
              bordered
              :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
            >
              <a-descriptions-item label="ค่าเข้า">
                <h1>
                  ผู้ใหญ่ คนละ 50 บาท <br />เด็กโต คนละ 20 บาท<br />
                  เด็กเล็ก คนละ 10 บาท<br />
                  ชาวต่างชาติ คนละ 100 บาท <br />
                </h1>
              </a-descriptions-item>

              <a-descriptions-item label="เปิดให้เข้าชม">
                <h1>
                  วันละ 2 รอบ คือ 10.00 น. และ 14.00 น. <br />
                  ไม่เว้นวันหยุดเสาร์-อาทิตย์ <br />หรือวันหยุดนักขัตฤกษ์
                </h1>
              </a-descriptions-item>

              <br />
              <a-descriptions-item label="ลักษณะ">
                <blockquote style="margin: 25px 50px 75px 100px">
                  <p style="text-indent: 50px; font-size: 16px" width="480">
                    หมู่บ้านช้างศูนย์คชศึกษา หรือ หมู่บ้านช้างบ้านตากลาง
                    จ.สุรินทร์ เป็นสถานที่ดำเนินงานตามโครงการนำช้างคืนถิ่น
                    เพื่อแก้ไขปัญหาช้างเร่ร่อนให้กลับมาอยู่ถิ่นฐานบ้านเกิดอย่างมีความสุขโดยจัดการท่องเที่ยวเชิงวัฒนธรรมเพื่อรองรับนักท่องเที่ยว
                    อาทิ การแสดงของช้าง พิพิธภัณฑ์ช้าง และการแสดงช้างเล่นน้ำ
                    ในช่วงเวลาที่ไม่มีการแสดง
                    สามารถเข้ามาชมและสัมผัสช้างได้อย่างใกล้ชิด
                    ทั้งลอดท้องข้างขี่ช้าง นั่งงวงช้าง
                    โดยให้ค่าตอบแทนใส่กล่องบริจาคที่ควาญช้างแต่ละตัวตามความเหมาะสม
                    ซึ่งช้างในศูนย์คชศึกษาเป็นช้างที่ค่อนข้างเชื่องมีคุ้นเคยกับนักท่องเที่ยวเป็นอย่างดี
                  </p>
                </blockquote>
              </a-descriptions-item>
            </a-descriptions>
          </div>
          <!-- 
          <div
            :style="{
              padding: '24px',
              background: '#fff',
              minHeight: '360px',
            }"
          ></div> -->
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
/* Carousel */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 300px;
  line-height: 400px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>